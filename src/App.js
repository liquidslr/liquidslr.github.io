import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const commands = [
    'grep "root" /etc/group',
    'uname -a',
    'cd /home/gaurav/ && ls',
    'cat intro.txt',
  ];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(commands[0]);
  const [commandsIdx, setCommandsIdx] = useState(0);

  useEffect(() => {
    if (text && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const revealText = () => {
      setIsVisible(true);
      setIdx(idx + 1);
      setCurrentText('');
      setCurrentIndex(0);
      setCommandsIdx(idx % 2 != 0 ? commandsIdx : commandsIdx + 1);
      setText(commands[commandsIdx]);
    };
    const delay = 500 + idx * 100;
    const timeoutId = setTimeout(revealText, delay);

    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <div className="App">
      <div className="body">
        <div className="code-block">
          <div>
            <span id="a">guest@optimus</span>:<span id="b">~</span>
            <span id="c">$</span>
            <span id="z"> {idx === 0 ? currentText : commands[0]}</span>
          </div>
          {isVisible && idx >= 1 && <span id="g">gaurav kumar</span>}
        </div>
        {isVisible && idx >= 2 && (
          <div className="code-block">
            <div>
              <span id="a">guest@optimus</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 2 ? currentText : commands[1]}</span>
            </div>
            {isVisible && idx >= 3 && (
              <span id="z" style={{ fontWeight: 'bold' }}>
                cs grad student at usc, past: engineering physics at indian
                institue of technology roorkee
              </span>
            )}
          </div>
        )}
        {isVisible && idx >= 4 && (
          <div className="code-block">
            <div>
              <span id="a">guest@optimus</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 4 ? currentText : commands[2]}</span>
            </div>
            {isVisible && idx >= 5 && (
              <span id="e" style={{ fontWeight: 'bold' }}>
                intro.txt
              </span>
            )}
          </div>
        )}
        {isVisible && idx >= 6 && (
          <div className="code-block">
            <div>
              <span id="a">guest@optimus</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 6 ? currentText : commands[3]}</span>
            </div>
            {isVisible && idx >= 7 && (
              <>
                <div className="code-block" id="w">
                  <div>==============</div>
                  <div>ROOT VARIABLES</div>
                  <div>==============</div>
                </div>
                <div className="code-block">
                  <span id="f">interests</span>
                  <span id="z">
                    =['Programming Languages', 'Systems', 'Machine Learning',]
                  </span>
                </div>
                <div className="code-block" id="w">
                  <div>================</div>
                  <div>WORK EXPERIENCE</div>
                  <div>================</div>
                </div>
                <div className="code-block">
                  <div id="z">
                    [Summer 2020] <b>Senior Software Engineer</b>,{' '}
                    <span id="link">
                      <a href="https://yojakexports.com/" target="blank">
                        Yojak
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [Fall 2020] &nbsp; <b>Data Scientist</b>,{' '}
                    <span id="link">
                      <a href="https://fractal.ai" target="blank">
                        Fractal Analytics
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [Summer 2018]&nbsp;<b>Software Developer Intern</b>,{' '}
                    <span id="link">
                      <a href="https://hackerearth.com" target="blank">
                        Hackerearth
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [2017-2020] &nbsp; <b>Member and Developer</b>,{' '}
                    <span id="link">
                      <a href="https://img.channeli.in" target="blank">
                        Information Management Group{' '}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="code-block" id="w">
                  <div>================</div>
                  <div>RÉSUMÉ</div>
                  <div>================</div>
                  <div id="z">
                    [<span id="link">resume</span>]
                  </div>
                </div>
                <div className="code-block" id="w">
                  <div>================</div>
                  <div>BLOG</div>
                  <div>================</div>
                  <div id="z">
                    [
                    <span id="link">
                      <a href="https://liquidslr.github.io/blog">link</a>
                    </span>
                    ]
                  </div>
                </div>
                <div className="code-block" id="w">
                  <div>================</div>
                  <div>CONTACT</div>
                  <div>================</div>
                  <div id="z">
                    [
                    <span id="link">
                      <a href="https://github.com/liquidslr" target="blank">
                        github
                      </a>
                    </span>
                    ] [
                    <span id="link">
                      <a
                        href="https://www.linkedin.com/in/gaurav98/"
                        target="blank"
                      >
                        linkedin
                      </a>
                    </span>
                    ] [
                    <span id="link">
                      <a href="https://twitter.com/liquid_slr" target="blank">
                        twitter
                      </a>
                    </span>
                    ]
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
