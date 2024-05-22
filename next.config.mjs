/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default withVanillaExtract(nextConfig);
