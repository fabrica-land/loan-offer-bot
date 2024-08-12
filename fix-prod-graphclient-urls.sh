#!/usr/bin/env bash
if [ -n "$NODE_ENV" ]
then
  if [ "$NODE_ENV" == "production" ]
  then
    sed -i -e 's|/version/v.*/api$|/api|' .graphclientrc.yml
    sed -i -e 's|/version/v.*/api"|/api"|' src/.graphclient/index.ts
  fi
fi

