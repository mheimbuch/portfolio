#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5e400b9ca43913001b83c1ff/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5e400b9ca43913001b83c1ff
curl -s -X POST https://api.stackbit.com/project/5e400b9ca43913001b83c1ff/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://api.stackbit.com/project/5e400b9ca43913001b83c1ff/webhook/build/publish > /dev/null
