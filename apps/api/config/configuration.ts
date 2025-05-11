const DEFAULT_PORT = 3010;

export default () => ({
  port: process.env.API_PORT
    ? parseInt(process.env.API_PORT, 10) || DEFAULT_PORT
    : DEFAULT_PORT,
});
