const httpRequest = async (
    method,
    url,
    body = null,
    headers = null,
    sendThirdPartyCookies = false
) => {
    const options = {
        method
    };

    if (sendThirdPartyCookies) {
        options.credentials = "include";
    }

    let contentType;

    if (headers) {
        contentType = headers["Content-Type"] || headers["content-type"];
        options.headers = headers;
    }

    const formatOptionsBody = () => {
        if (method.toLowerCase() === "get" || !body) {
            return undefined;
        }

        if (contentType === "text/plain") {
            return body;
        }

        return JSON.stringify(body);
    };

    options.body = formatOptionsBody();

    // Detect if Segment exists and if it does,
    // add the relevant headers to every API call.
    let anonymousId = "0";
    if (
        typeof window !== "undefined" &&
        window.analytics &&
        window.analytics.user
    ) {
        anonymousId = window.analytics.user().anonymousId() || "0";
    }

    options.headers = {
        ...options.headers,
        "x-recur-anonymous-id": anonymousId
    };

    return fetch(url, options)
        .then((response) => {
            if (response.status === 204) {
                return "";
            }
            return response.json();
        })
        .then((data) => data)
        .catch((error) => {
            const additionalData = ((hasBody) => {
                const data = [];

                if (hasBody) {
                    data.push(`with body ${JSON.stringify(body)}`);
                }

                return data.join(" ");
            })(method.toLowerCase() !== "get" && body);

            logger.error(`
        Network Error (${error.name}, ${error.message}):
        ${method} ${url} ${additionalData} with headers ${JSON.stringify(
                options.headers
            )}
      `);

            return error;
        });
};

export const get = (
    url,
    body = null,
    headers = null,
    sendThirdPartyCookies = false
) => httpRequest("GET", url, body, headers, sendThirdPartyCookies);
