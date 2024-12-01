import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const savedCamerePosition = sessionStorage.getItem("camereScrollPosition");
    const isReturningFromRoom = sessionStorage.getItem("isReturningFromRoom") === "true";

    if (pathname === "/") {
      // Dacă utilizatorul revine dintr-o cameră, mergem la secțiunea „Camere”
      if (isReturningFromRoom && savedCamerePosition) {
        window.scrollTo(0, parseInt(savedCamerePosition, 10));
        sessionStorage.removeItem("isReturningFromRoom"); // Resetăm flag-ul
      } else {
        // Dacă este prima vizită, scroll-ul rămâne sus
        window.scrollTo(0, 0);
      }
    } else if (pathname.startsWith("/room/")) {
      // Scroll la descrierea camerei
      const cameraContent = document.getElementById("camera-content");
      if (cameraContent) {
        cameraContent.scrollIntoView({ behavior: "smooth" });
      }
      // Setăm flag-ul pentru a ști că utilizatorul vine dintr-o cameră
      sessionStorage.setItem("isReturningFromRoom", "true");
    }
  }, [pathname]);

  useEffect(() => {
    // Salvăm poziția secțiunii „Camere” la părăsirea paginii principale
    return () => {
      if (pathname === "/") {
        const camereSection = document.getElementById("camere");
        if (camereSection) {
          const camerePosition = camereSection.getBoundingClientRect().top + window.scrollY;
          sessionStorage.setItem("camereScrollPosition", camerePosition);
        }
      }
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
