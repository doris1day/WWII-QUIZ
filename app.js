import React, { useState, useEffect } from "react";

const events = [
  {
    year: 1919,
    event: "Treaty of Versailles",
    significance:
      "This treaty officially ended World War I and imposed harsh penalties on Germany, setting the stage for future conflicts.",
  },
  {
    year: 1933,
    event: "Hitler becomes Chancellor of Germany",
    significance:
      "This marked the Nazi Party's rise to power in Germany, setting the stage for the events leading to WWII.",
  },
  {
    year: 1933,
    event: "German Rearmament begins",
    significance:
      "This violated the Treaty of Versailles and marked the start of Germany's military buildup under Nazi rule.",
  },
  {
    year: 1935,
    event: "Nuremberg Laws enacted",
    significance:
      "These racist laws institutionalized many of the racial theories prevalent in Nazi ideology.",
  },
  {
    year: 1935,
    event: "Anglo-German Naval agreement",
    significance:
      "This agreement allowed Germany to increase its naval strength, effectively undermining the Treaty of Versailles.",
  },
  {
    year: 1936,
    event: "Remilitarisation of the Rhineland",
    significance:
      "This bold move by Hitler tested the resolve of other European powers and strengthened his position in Germany.",
  },
  {
    year: 1936,
    event: "Spanish Civil War begins",
    significance:
      "This conflict became a testing ground for German and Italian military equipment and tactics.",
  },
  {
    year: 1937,
    event: "Japan invades China",
    significance:
      "This marked the start of the Second Sino-Japanese War, which later merged into WWII.",
  },
  {
    year: 1938,
    event: "Anschluss",
    significance:
      "The annexation of Austria into Nazi Germany was a major step in Hitler's expansionist policy.",
  },
  {
    year: 1938,
    event: "Munich agreement",
    significance:
      "This agreement, aimed at appeasing Hitler, allowed Germany to annex parts of Czechoslovakia, but failed to prevent further aggression.",
  },
  {
    year: 1939,
    event: "Nazi-Soviet Non-aggression Pact",
    significance:
      "This surprising alliance between ideological enemies paved the way for the invasion of Poland and the start of WWII.",
  },
  {
    year: 1939,
    event: "Invasion of Poland",
    significance: "This event marked the beginning of World War II in Europe.",
  },
  {
    year: 1940,
    event: "Dunkirk Evacuation",
    significance:
      "This operation saved a significant portion of the Allied army from capture, allowing them to continue the fight.",
  },
  {
    year: 1940,
    event: "Battle of Britain",
    significance:
      "This air battle was a major turning point in the war, preventing Germany from invading Britain.",
  },
  {
    year: 1940,
    event: "Fall of France",
    significance:
      "The quick defeat of France shocked the world and left Britain standing alone against Nazi Germany.",
  },
  {
    year: 1941,
    event: "Lend-Lease Act",
    significance:
      "This U.S. program provided critical supplies to Allied nations before and during America's direct involvement in the war.",
  },
  {
    year: 1941,
    event: "Operation Barbarossa begins",
    significance:
      "This massive invasion of the Soviet Union opened the Eastern Front, ultimately contributing to Germany's defeat.",
  },
  {
    year: 1941,
    event: "Attack on Pearl Harbor",
    significance:
      "This surprise attack by Japan drew the United States into World War II.",
  },
  {
    year: 1941,
    event: "Siege of Leningrad begins",
    significance:
      "This prolonged siege became one of the longest and most destructive in history, symbolizing Soviet resistance.",
  },
  {
    year: 1942,
    event: "Battle of Midway",
    significance:
      "This naval battle marked a turning point in the Pacific War, halting Japanese expansion.",
  },
  {
    year: 1942,
    event: "Battle of Stalingrad begins",
    significance:
      "This turning point of the war in Europe marked the limit of German expansion and the beginning of Soviet counteroffensives.",
  },
  {
    year: 1943,
    event: "Tehran Conference",
    significance:
      "This meeting of Allied leaders (Roosevelt, Churchill, and Stalin) shaped the post-war world.",
  },
  {
    year: 1943,
    event: "Allied invasion of Italy",
    significance:
      "This operation knocked Italy out of the war and divided German forces.",
  },
  {
    year: 1944,
    event: "D-Day invasion of Normandy",
    significance:
      "This massive Allied invasion of Nazi-occupied France marked the beginning of the end for Hitler's Third Reich.",
  },
  {
    year: 1944,
    event: "Operation Market Garden",
    significance:
      "This ambitious Allied operation aimed to end the war quickly but ultimately failed.",
  },
  {
    year: 1944,
    event: "Battle of the Bulge begins",
    significance:
      "This was Hitler's last major offensive in the West, its failure accelerated Germany's defeat.",
  },
  {
    year: 1945,
    event: "Yalta Conference",
    significance:
      "This meeting of Allied leaders finalized plans for the defeat of Germany and post-war Europe.",
  },
  {
    year: 1945,
    event: "Bombing of Dresden",
    significance:
      "This controversial Allied bombing raid caused a firestorm that destroyed much of the city.",
  },
  {
    year: 1945,
    event: "Battle of Berlin",
    significance:
      "This final major offensive in the European theater led to Hitler's suicide and Nazi Germany's surrender.",
  },
  {
    year: 1945,
    event: "Atomic bombings of Hiroshima and Nagasaki",
    significance:
      "These events led to Japan's surrender and the end of World War II, but also ushered in the atomic age.",
  },
];

const WWIITimelineGame = () => {
  const [gameEvents, setGameEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const shuffleEvents = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffled = shuffleEvents(events);
    setGameEvents(shuffled.slice(0, 10));
  }, []);

  const handleYearSelection = (year) => {
    setSelectedYear(year);
    setShowResult(true);

    if (year === gameEvents[currentEventIndex].year) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentEventIndex < gameEvents.length - 1) {
        setCurrentEventIndex(currentEventIndex + 1);
        setSelectedYear(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  const restartGame = () => {
    const shuffled = shuffleEvents(events);
    setGameEvents(shuffled.slice(0, 10));
    setCurrentEventIndex(0);
    setSelectedYear(null);
    setScore(0);
    setShowResult(false);
    setGameOver(false);
  };

  const getYearOptions = () => {
    const correctYear = gameEvents[currentEventIndex].year;
    const options = [correctYear];
    while (options.length < 4) {
      const randomYear = Math.floor(Math.random() * (1945 - 1919 + 1)) + 1919;
      if (!options.includes(randomYear)) {
        options.push(randomYear);
      }
    }
    return shuffleEvents(options);
  };

  if (gameEvents.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        WWII Timeline Quiz
      </h1>
      {!gameOver ? (
        <>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>
            In which year did the following event occur?
          </p>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {gameEvents[currentEventIndex].event}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            {getYearOptions().map((year) => (
              <button
                key={year}
                onClick={() => handleYearSelection(year)}
                disabled={showResult}
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  backgroundColor:
                    selectedYear === year
                      ? year === gameEvents[currentEventIndex].year
                        ? "#4CAF50"
                        : "#f44336"
                      : "#008CBA",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {year}
              </button>
            ))}
          </div>
          {showResult && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              {selectedYear === gameEvents[currentEventIndex].year ? (
                <div>
                  <p style={{ color: "#4CAF50", fontWeight: "bold" }}>
                    Correct!
                  </p>
                  <p>{gameEvents[currentEventIndex].significance}</p>
                </div>
              ) : (
                <div>
                  <p style={{ color: "#f44336", fontWeight: "bold" }}>
                    Incorrect. The correct year was{" "}
                    {gameEvents[currentEventIndex].year}.
                  </p>
                  <p>{gameEvents[currentEventIndex].significance}</p>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Game Over!
          </p>
          <p style={{ marginBottom: "20px" }}>
            Your final score: {score} out of {gameEvents.length}
          </p>
          <button
            onClick={restartGame}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Play Again
          </button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <p>Score: {score}</p>
        <p>
          Question: {currentEventIndex + 1} / {gameEvents.length}
        </p>
      </div>
    </div>
  );
};

export default WWIITimelineGame;
