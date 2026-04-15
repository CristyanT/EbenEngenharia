/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lp',
        permanent: false, // Mantém como false enquanto for apenas para visualização
      },
    ]
  },
}

export default nextConfig
