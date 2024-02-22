#!/bin/bash
cd ensolvers-front/
echo "REACT_APP_API_URL_BASE="https://ensolvers-back-agp.herokuapp.com"" > .env
npm install
npm start
