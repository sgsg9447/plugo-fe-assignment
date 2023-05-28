import { useRecoilState } from "recoil";
import { isMobileState } from "@/store/atom";
import { useLayoutEffect } from "react";

export const ResizeProvider = () => {
  const [, setIsMobile] = useRecoilState(isMobileState);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};
