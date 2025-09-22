#!/usr/bin/env node

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

// Créer l'app Next.js avec HMR désactivé
const app = next({ 
  dev, 
  hostname, 
  port,
  // Configuration pour désactiver complètement HMR
  conf: {
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        // Supprimer complètement HMR
        config.plugins = config.plugins.filter(plugin => 
          plugin.constructor.name !== 'HotModuleReplacementPlugin'
        )
        config.cache = false
      }
      return config
    },
    experimental: {
      fastRefresh: false,
    },
    reactStrictMode: false,
  }
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
  .once('error', (err) => {
    console.error(err)
    process.exit(1)
  })
  .listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log('> Mode développement SANS Hot Module Replacement')
  })
})
