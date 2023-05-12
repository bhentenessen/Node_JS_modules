// The path module provides an API for working with file and directory paths. It's useful for creating cross-platform compatible paths and resolving relative paths.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url);
  const fileExt = path.extname(filePath);

  if (fileExt === '.html' || fileExt === '.css' || fileExt === '.js') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error\n');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', `text/${fileExt.slice(
        