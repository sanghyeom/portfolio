import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from "matter-js";
import preloadIcons from "./heroIconPreload";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_QUERY = "(max-width: 48em)";
const MAX_DPR = 2;
const WALL_THICKNESS = 80;
const BOX_HEIGHT = 72;
const BOX_RADIUS = 10;
const ICON_INSET = 6;
const EXTRA_GRAVITY_SCALE = 0.00018;

const BASE_TECH_STACKS = [
  {
    id: "react",
    label: "React",
    color: "#61dafb",
    iconSrc: new URL("../assets/tech-icons/react.png", import.meta.url).href,
    weight: 0.85,
  },
  {
    id: "javascript",
    label: "JavaScript",
    color: "#f7df1e",
    iconSrc: new URL("../assets/tech-icons/javascript.png", import.meta.url).href,
    weight: 0.9,
  },
  {
    id: "springboot",
    label: "Spring",
    color: "#6db33f",
    iconSrc: new URL("../assets/tech-icons/springboot.png", import.meta.url).href,
    weight: 1.12,
  },
  {
    id: "mysql",
    label: "MySQL",
    color: "#4479a1",
    iconSrc: new URL("../assets/tech-icons/mysql.png", import.meta.url).href,
    weight: 1.08,
  },
  {
    id: "docker",
    label: "Docker",
    color: "#2496ed",
    iconSrc: new URL("../assets/tech-icons/docker.png", import.meta.url).href,
    weight: 1.0,
  },
  {
    id: "python",
    label: "Python",
    color: "#3776ab",
    iconSrc: new URL("../assets/tech-icons/python.png", import.meta.url).href,
    weight: 0.95,
  },
  {
    id: "linux",
    label: "Linux",
    color: "#fcc624",
    iconSrc: new URL("../assets/tech-icons/linux.png", import.meta.url).href,
    weight: 1.16,
  },
  {
    id: "git",
    label: "Git",
    color: "#f05032",
    iconSrc: new URL("../assets/tech-icons/git.png", import.meta.url).href,
    weight: 0.88,
  },
  {
    id: "sql",
    label: "SQL",
    color: "#2563eb",
    iconSrc: new URL("../assets/tech-icons/sql.png", import.meta.url).href,
    weight: 1.22,
  },
  {
    id: "websocket",
    label: "WebSocket",
    color: "#111827",
    iconSrc: new URL("../assets/tech-icons/websocket.png", import.meta.url).href,
    weight: 1.14,
  },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const hexToRgba = (hex, alpha) => {
  const normalized = hex.replace("#", "");
  const fullHex =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const debounce = (fn, wait) => {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), wait);
  };
};

const getTargetBodyCount = () => {
  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  let bodyCount = isMobile ? 12 : 18;

  if ((navigator.hardwareConcurrency || 8) <= 4) {
    bodyCount -= 2;
  }

  return Math.max(10, bodyCount);
};

const createWalls = (width, height) => [
  Bodies.rectangle(
    width / 2,
    height + WALL_THICKNESS / 2,
    width + WALL_THICKNESS * 2,
    WALL_THICKNESS,
    { isStatic: true, render: { visible: false } }
  ),
  Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height * 2, {
    isStatic: true,
    render: { visible: false },
  }),
  Bodies.rectangle(
    width + WALL_THICKNESS / 2,
    height / 2,
    WALL_THICKNESS,
    height * 2,
    { isStatic: true, render: { visible: false } }
  ),
];

const buildStacks = (_context, iconMap) =>
  BASE_TECH_STACKS.map((stack) => ({
    ...stack,
    hasIcon: iconMap.has(stack.id),
    boxWidth: 72,
  }));

const buildQueue = (stacks) => {
  const targetCount = getTargetBodyCount();
  const queue = [];

  for (let index = 0; index < targetCount; index += 1) {
    queue.push(stacks[index % stacks.length]);
  }

  return queue;
};

const createTechBody = (stack, worldWidth, worldHeight, index) => {
  const horizontalPadding = Math.max(24, stack.boxWidth / 2 + 8);
  const minX = horizontalPadding;
  const maxX = Math.max(horizontalPadding + 1, worldWidth - horizontalPadding);
  const spawnX = minX + Math.random() * (maxX - minX);
  const spawnY =
    -BOX_HEIGHT - Math.random() * Math.min(320, worldHeight * 0.72) - index * 22;
  const weightFactor = stack.weight || 1;
  const friction = clamp(0.16 + weightFactor * 0.06, 0.15, 0.3);
  const frictionAir = clamp(0.045 - weightFactor * 0.022, 0.012, 0.04);
  const restitution = clamp(0.26 - (weightFactor - 1) * 0.18, 0.06, 0.28);
  const density = clamp(0.0014 * (0.7 + weightFactor), 0.0011, 0.0038);

  const body = Bodies.rectangle(spawnX, spawnY, stack.boxWidth, BOX_HEIGHT, {
    chamfer: { radius: BOX_RADIUS },
    angle: (Math.random() - 0.5) * 0.18,
    friction,
    frictionAir,
    restitution,
    density,
    slop: 0.01,
    render: {
      fillStyle: hexToRgba(stack.color, 0.18),
      strokeStyle: stack.color,
      lineWidth: 2,
    },
  });

  body.plugin.tech = stack;
  body.plugin.weightFactor = weightFactor;
  Body.setVelocity(body, {
    x: (Math.random() - 0.5) * 0.65,
    y: Math.random() * 0.5,
  });
  Body.setAngularVelocity(body, (Math.random() - 0.5) * (0.022 / weightFactor));
  return body;
};

const keepBodiesInside = (bodies, width, height) => {
  bodies.forEach((body) => {
    const stack = body.plugin.tech;
    const halfWidth = stack.boxWidth / 2;
    const safeX = clamp(body.position.x, halfWidth + 4, width - halfWidth - 4);
    const safeY = Math.min(body.position.y, height - BOX_HEIGHT / 2 - 4);

    Body.setPosition(body, { x: safeX, y: safeY });
  });
};

const drawLabels = (context, bodies, iconMap) => {
  bodies.forEach((body) => {
    const stack = body.plugin.tech;
    if (!stack) return;

    context.save();
    context.translate(body.position.x, body.position.y);
    context.rotate(body.angle);

    const icon = iconMap.get(stack.id);
    if (icon) {
      const iconWidth = icon.naturalWidth || icon.width || 1;
      const iconHeight = icon.naturalHeight || icon.height || 1;
      const iconRatio = iconWidth / iconHeight;
      const maxWidth = stack.boxWidth - ICON_INSET * 2;
      const maxHeight = BOX_HEIGHT - ICON_INSET * 2;

      let drawWidth = maxWidth;
      let drawHeight = maxHeight;

      if (iconRatio >= 1) {
        drawHeight = drawWidth / iconRatio;
        if (drawHeight > maxHeight) {
          drawHeight = maxHeight;
          drawWidth = drawHeight * iconRatio;
        }
      } else {
        drawWidth = drawHeight * iconRatio;
        if (drawWidth > maxWidth) {
          drawWidth = maxWidth;
          drawHeight = drawWidth / iconRatio;
        }
      }

      context.drawImage(icon, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
    }
    context.restore();
  });
};

async function setupScene(heroElement, layerElement) {
  const width = layerElement.clientWidth;
  const height = layerElement.clientHeight;
  if (!width || !height) {
    heroElement.classList.add("hero-matter-disabled");
    return;
  }

  const iconMap = await preloadIcons(
    BASE_TECH_STACKS.map(({ id, iconSrc }) => ({ id, src: iconSrc }))
  );

  const engine = Engine.create();
  engine.gravity.y = 0.95;

  const render = Render.create({
    element: layerElement,
    engine,
    options: {
      width,
      height,
      wireframes: false,
      background: "transparent",
      pixelRatio: Math.min(window.devicePixelRatio || 1, MAX_DPR),
    },
  });

  Render.setPixelRatio(render, Math.min(window.devicePixelRatio || 1, MAX_DPR));
  render.canvas.setAttribute("aria-hidden", "true");
  render.canvas.setAttribute("role", "presentation");

  const stacks = buildStacks(render.context, iconMap);
  const techBodies = buildQueue(stacks).map((stack, index) =>
    createTechBody(stack, width, height, index)
  );

  let walls = createWalls(width, height);
  Composite.add(engine.world, [...walls, ...techBodies]);

  const mouse = Mouse.create(render.canvas);
  const syncMouseScale = () => {
    const pixelRatio = render.options.pixelRatio || 1;
    Mouse.setScale(mouse, { x: 1 / pixelRatio, y: 1 / pixelRatio });
    Mouse.setOffset(mouse, { x: 0, y: 0 });
  };
  syncMouseScale();
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.18,
      damping: 0.1,
      render: { visible: false },
    },
  });

  Composite.add(engine.world, mouseConstraint);
  render.mouse = mouse;
  render.canvas.style.pointerEvents = "auto";

  const runner = Runner.create();
  const onAfterRender = () => drawLabels(render.context, techBodies, iconMap);
  const onBeforeUpdate = () => {
    techBodies.forEach((body) => {
      const weightFactor = body.plugin.weightFactor || 1;
      const extraGravity = Math.max(0, weightFactor - 1) * EXTRA_GRAVITY_SCALE;
      if (!extraGravity) return;

      Body.applyForce(body, body.position, {
        x: 0,
        y: body.mass * extraGravity,
      });
    });
  };

  const setGrabCursor = () => {
    render.canvas.style.cursor = "grabbing";
  };
  const setIdleCursor = () => {
    render.canvas.style.cursor = "grab";
  };

  Events.on(render, "afterRender", onAfterRender);
  Events.on(engine, "beforeUpdate", onBeforeUpdate);
  Events.on(mouseConstraint, "startdrag", setGrabCursor);
  Events.on(mouseConstraint, "enddrag", setIdleCursor);

  Render.run(render);
  Runner.run(runner, engine);
  heroElement.classList.remove("hero-matter-disabled");

  let destroyed = false;

  const onResize = debounce(() => {
    if (destroyed) return;

    const nextWidth = layerElement.clientWidth;
    const nextHeight = layerElement.clientHeight;
    if (!nextWidth || !nextHeight) return;

    Render.setSize(render, nextWidth, nextHeight);
    Render.setPixelRatio(render, Math.min(window.devicePixelRatio || 1, MAX_DPR));
    syncMouseScale();

    walls.forEach((wall) => Composite.remove(engine.world, wall));
    walls = createWalls(nextWidth, nextHeight);
    Composite.add(engine.world, walls);

    keepBodiesInside(techBodies, nextWidth, nextHeight);
  }, 140);

  const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY);

  const onReducedMotionChange = (event) => {
    if (event.matches) {
      destroy();
      heroElement.classList.add("hero-matter-disabled");
    }
  };

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;

    window.removeEventListener("resize", onResize);
    window.removeEventListener("orientationchange", onResize);
    window.removeEventListener("pagehide", destroy);

    if (reducedMotionMedia.removeEventListener) {
      reducedMotionMedia.removeEventListener("change", onReducedMotionChange);
    } else {
      reducedMotionMedia.removeListener(onReducedMotionChange);
    }

    Events.off(render, "afterRender", onAfterRender);
    Events.off(engine, "beforeUpdate", onBeforeUpdate);
    Events.off(mouseConstraint, "startdrag", setGrabCursor);
    Events.off(mouseConstraint, "enddrag", setIdleCursor);
    Runner.stop(runner);
    Render.stop(render);
    Composite.clear(engine.world, false, true);
    Engine.clear(engine);

    if (render.canvas.parentNode === layerElement) {
      layerElement.removeChild(render.canvas);
    }
    render.textures = {};
  };

  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);
  window.addEventListener("pagehide", destroy);

  if (reducedMotionMedia.addEventListener) {
    reducedMotionMedia.addEventListener("change", onReducedMotionChange);
  } else {
    reducedMotionMedia.addListener(onReducedMotionChange);
  }
}

export default function initHeroMatterStacks() {
  const heroElement = document.getElementById("hero");
  const layerElement = document.getElementById("hero-matter-layer");
  if (!heroElement || !layerElement) return;

  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
    heroElement.classList.add("hero-matter-disabled");
    return;
  }

  void setupScene(heroElement, layerElement).catch((error) => {
    console.error("[hero-matter] initialization failed:", error);
    heroElement.classList.add("hero-matter-disabled");
  });
}
