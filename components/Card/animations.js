import { keyframes } from "@emotion/react";

export const shake = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }`
