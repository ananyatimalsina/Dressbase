import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

import "./plan.css";
import { useEffect, useState } from "react";

import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import Comparison from "../../components/Comparison/comparison";

//TODO: Optimize mobile view

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

  const data_retour = [
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

  const data_fastFashion = [
    {
      name: "2020",
      pv: 82.58,
    },
    {
      name: "2021",
      pv: 90,
    },
    {
      name: "2022",
      pv: 98.7,
    },
    {
      name: "2023",
      pv: 99,
    },
    {
      name: "2024",
      pv: 108,
    },
    {
      name: "2025",
      pv: 113.5,
    },
    {
      name: "2026",
      pv: 120,
    },
    {
      name: "2027",
      pv: 130,
    },
    {
      name: "2028",
      pv: 150,
    },
    {
      name: "2029",
      pv: 160,
    },
    {
      name: "2030",
      pv: 167.5,
    },
  ];

  const code = `
import dressbase
  
dressbase = dressbase.Dressbase("API_KEY")
  
inputImg = "path/to/image.jpg"
inputClothes = ["path/to/cloth1.jpg", "path/to/cloth2.jpg"]
  
outputImg = dressbase.modifyClothing(inputImg, inputClothes)
`;

  return (
    <div className="planContainer">
      <h1 className="heading">Das Problem</h1>
      <div className="introContainer">
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          <a
            style={{ fontSize: "1.5rem" }}
            className="textLink"
            target="_blank"
            href="https://www.coveo.com/en/resources/reports/holiday-shopper-trends-2022"
          >
            Top-Gründe für Online-Retouren
          </a>
          <BarChart
            style={{ cursor: "none", userSelect: "none" }}
            width={width}
            height={300}
            data={data_retour}
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
          Im Jahre 2022 gaben Online-Shopper als häufigsten Grund für
          Warenrückgaben an, dass die Größe, Passform oder Farbe nicht stimmte,
          als vierthäufigsten Grund, dass die Teile in Bildern anders aussahen.
          Beide dieser Retour-Probleme, welche die Modeindustrie viel Geld und
          CO₂ kosten, können mithilfe von sogenannten{" "}
          <a
            className="textLink"
            href="https://en.wikipedia.org/wiki/Virtual_dressing_room"
            target="_blank"
          >
            "Virtual Dressing Rooms"
          </a>{" "}
          vermieden werden.
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
        agierende Plattform für virtuelle Anproben von Entwicklern für
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
        über Meilen hinweg voraus ist und auf vorab trainierte latente
        Diffusionsmodelle basiert. Um unseren Traum einer Online Fashion
        Revolution zu verwirklichen, bedarf es jedoch an vielen begeisterten
        Investoren. Was wir Ihnen bieten?
      </span>
      <div className="apiContainer">
        <span className="text">
          Ein Top-Produkt, welches die{" "}
          <a
            className="textLink"
            href="https://github.blog/2023-06-08-developer-experience-what-is-it-and-why-should-you-care/"
            target="_blank"
          >
            Entwicklererfahrung
          </a>{" "}
          priorisiert, mithilfe einer einfach verwendbaren{" "}
          <a
            className="textLink"
            href="https://en.wikipedia.org/wiki/API"
            target="_blank"
          >
            API
          </a>
          , damit sie sich auf das konzentrieren können, was wirklich wichtig
          ist: Ihre Fashion und die Kunden.
        </span>
        <div style={{ flexGrow: 1, margin: "1rem" }}>
          <CodeBlock code={code} language="python" theme={themes.dracula}>
            <CodeBlock.Code className="codeblock">
              <CodeBlock.LineContent>
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </CodeBlock.Code>
          </CodeBlock>
        </div>
      </div>
      <div className="fastFashionContainer">
        <div style={{ flexGrow: 1, margin: "1rem" }}>
          <LineChart width={width} height={300} data={data_fastFashion}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#694d85"
              strokeWidth={3}
            />
          </LineChart>
        </div>
        <span className="text">
          Schnelles Wachstum: Die Fast Fashion Industrie soll{" "}
          <a
            className="textLink"
            href="https://worldmetrics.org/fast-fashion-statistics/#sources"
            target="_blank"
          >
            bis 2029 43,6 Mrd. USD wert
          </a>{" "}
          sein. Da die meisten dieser Unternehmen ohne physische Läden
          operieren, ist es für sie besonders wichtig, dass ihre Kunden die
          Kleidung online anprobieren können. Mit Dressbase ist dies möglich.
        </span>
      </div>
      <div className="pricingContainer">
        <span className="text">
          Und kompetetive Preise. Verglichen mit unseren - qualitativ
          schlechteren - Konkurrenten ist unser Produkt Preis- und Hochwertiger.
        </span>
        <div style={{ flexGrow: 1, margin: "1rem" }}>
          <Comparison
            columns={["", "Dressbase", "Fitanalytics", "Else Corp", "FXGear"]}
            rows={[
              ["Preis", "$0.002 pro Bild", "N/A", "N/A", "N/A"],
              ["Virtual Dressing Room", "VTON", "N/A", "AR", "AR"],
              ["API", "Ja", "Ja", "Nein", "Nein"],
              ["Kleidungs Empfehlungen", "Nein", "Ja", "Nein", "Nein"],
            ]}
          />
        </div>
      </div>
      <a
        href="https://github.com/ananyatimalsina"
        target="_blank"
        className="investNowBtn textBold"
      >
        Jetzt Investieren
      </a>
    </div>
  );
}
