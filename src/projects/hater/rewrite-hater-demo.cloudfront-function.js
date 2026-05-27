/**
 * CloudFront Function: rewrite-hater-demo
 * Event type: Viewer request
 *
 * Public URL:
 *   /demo/hater/
 *
 * Origin object path:
 *   /games/hater/v1.99.99/index.html
 *   /games/hater/v1.99.99/Build/...
 *   /games/hater/v1.99.99/TemplateData/...
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  var publicPrefix = "/demo/hater";
  var originPrefix = "/games/hater/v1.99.99";

  if (uri === publicPrefix) {
    return {
      statusCode: 302,
      statusDescription: "Found",
      headers: {
        location: { value: publicPrefix + "/" },
        "cache-control": { value: "no-cache" },
      },
    };
  }

  if (uri === publicPrefix + "/") {
    request.uri = originPrefix + "/index.html";
    return request;
  }

  if (uri.indexOf(publicPrefix + "/") === 0) {
    request.uri = originPrefix + uri.substring(publicPrefix.length);
    return request;
  }

  return request;
}
