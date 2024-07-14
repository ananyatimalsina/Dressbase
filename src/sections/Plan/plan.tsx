import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";

import "./plan.css";
import { useEffect, useState } from "react";

export default function Plan() {
  const [width, setWidth] = useState(900);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const baseWidth = 900;
      const decreasePer50px = 500 / 9;

      if (viewportWidth <= 900) {
        const decreasedWidth =
          baseWidth - Math.floor((900 - viewportWidth) / 50) * decreasePer50px;
        setWidth(decreasedWidth);
      } else {
        setWidth(baseWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      name: "Falsche Größe, schlechte Passform oder Farbe",
      Prozent: 55,
    },
    {
      name: "Teile sahen in Bildern anders aus",
      Prozent: 36,
    },
    {
      name: "Unsicherheit während dem Kauf",
      Prozent: 14,
    },
    {
      name: "Schelchte Qualität",
      Prozent: 46,
    },
    {
      name: "Beschädigt oder defekt",
      Prozent: 48,
    },
    {
      name: "Falsche Artikel erhalten",
      Prozent: 33,
    },
    {
      name: "Es wurden mehrere Größen oder Artikel bestellt, mit der Absicht, nur die zu behalten, die passen.",
      Prozent: 18,
    },
    {
      name: "Keine Online Rückgaben",
      Prozent: 17,
    },
  ];

  return (
    <div className="planContainer">
      <h1 className="textBold">Das Problem</h1>
      <div className="introContainer">
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a
            className="textBold"
            target="_blank"
            href="https://www.coveo.com/en/resources/reports/holiday-shopper-trends-2022"
          >
            Top-Gründe für Online-Retouren
          </a>
          <BarChart
            style={{ cursor: "none", userSelect: "none" }}
            width={width}
            height={300}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis display={"none"} dataKey="name" />
            <Tooltip />
            <Bar
              dataKey="Prozent"
              fill="#694d85"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </div>
        <span className="text">
          Im Jahre 2022 gaben Online Shopper als häufigsten Grund für
          Warenrückgaben an, dass die Größe, Passform oder Farbe nicht stimmte,
          als vierthäufigsten Grund, dass die Teile in Bildern anders aussahen.
          Beide dieser Retour-Probleme können mithilfe von sogennanten{" "}
          <a
            className="textLink"
            href="https://en.wikipedia.org/wiki/Virtual_dressing_room"
            target="_blank"
          >
            "Virtual Dressing Rooms"
          </a>{" "}
          in der Modebranche gelöst werden.
        </span>
      </div>
      <h1 style={{ fontSize: "2rem" }} className="brandingText">
        Wir stellen vor: DRESSBASE,
      </h1>
      <span className="text">
        eine als{" "}
        <a
          className="textLink"
          href="https://en.wikipedia.org/wiki/Software_as_a_service"
          target="_blank"
        >
          SaaS
        </a>{" "}
        agierende Platform für virtuelle Anproben, von Entwicklern für
        Entwickler. Im Gegensatz zu unseren Konkurrenten verwenden wir{" "}
        <a
          className="textLink"
          href="https://arxiv.org/abs/1711.08447"
          target="_blank"
        >
          VTON
        </a>
        , eine neue Methode, welche dem traditionellen{" "}
        <a
          className="textLink"
          href="https://en.wikipedia.org/wiki/Augmented_reality"
          target="_blank"
        >
          AR
        </a>{" "}
        über Meilen hinweg vorraus ist und auf vorab trainierte latente
        Diffusionsmodelle basiert.
      </span>
    </div>
  );
}
