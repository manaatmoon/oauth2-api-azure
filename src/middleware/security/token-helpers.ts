// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as jwt from "jsonwebtoken";

function validateAudience(token: string, audience: string): boolean {
    const decodedToken = jwt.decode(token, { complete: true, json: true }) as {
        [key: string]: any;
    };
    if (decodedToken === null) {
        return false;
    }
    return decodedToken.payload.aud === audience;
}

export { validateAudience };
