
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/my-portfolio/",
//   plugins: [
//     react({
//       babel: {
//         plugins: [["babel-plugin-react-compiler"]],
//       },
//     }),
//   ],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My_Portfolio/",
  plugins: [react()],
});
