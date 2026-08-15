document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".wspxp-card-layout");
  
  containers.forEach(container => {
    const name1 = container.getAttribute("data-name1") || "MR. PROXY";
    const status1 = container.getAttribute("data-status1") || "■ ONLINE";
    const role1 = container.getAttribute("data-role1") || "customer service";

    const name2 = container.getAttribute("data-name2") || "MS. CIPHER";
    const status2 = container.getAttribute("data-status2") || "■ ONLINE";
    const role2 = container.getAttribute("data-role2") || "technician";

    const descHTML = container.innerHTML;

    container.innerHTML = `
      <div class="wspxp-container">
        <div class="wspxp-bg">
          <div class="wspxp-logo-wrap">
            <img src="https://i.imgur.com/euKLhSp.png" alt="Logo" class="wspxp-logo-img">
          </div>

          <div class="wspxp-window">
            <div class="wspxp-titlebar">
              <div class="wspxp-title-space"></div>
              <div class="wspxp-controls">
                <div class="wspxp-btn-ctrl"><div class="wspxp-ico-min"></div></div>
                <div class="wspxp-btn-ctrl"><div class="wspxp-ico-max"></div></div>
                <div class="wspxp-btn-close">✕</div>
              </div>
            </div>

            <div class="wspxp-menubar">
              <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>I</u>mage</span><span><u>O</u>ptions</span><span><u>H</u>elp</span>
            </div>

            <div class="wspxp-main">
              <div class="wspxp-col-left">
                <div class="wspxp-card">
                  <div class="wspxp-card-avatar">
                    <img src="https://i.pinimg.com/1200x/14/fb/c3/14fbc355108a4ec2b1d66b781fad4bdb.jpg">
                    <img src="https://i.imgur.com/7vymGa3.png" class="wspxp-overlay">
                  </div>
                  <div class="wspxp-card-info">
                    <div class="wspxp-card-name">${name1}</div>
                    <div class="wspxp-card-status">${status1}</div>
                    <div class="wspxp-card-role">${role1}</div>
                  </div>
                </div>

                <div class="wspxp-card">
                  <div class="wspxp-card-avatar">
                    <img src="https://i.pinimg.com/736x/8b/5d/6b/8b5d6b84b03760dcdec1ab78d3608aef.jpg">
                    <img src="https://i.imgur.com/7vymGa3.png" class="wspxp-overlay">
                  </div>
                  <div class="wspxp-card-info">
                    <div class="wspxp-card-name">${name2}</div>
                    <div class="wspxp-card-status">${status2}</div>
                    <div class="wspxp-card-role">${role2}</div>
                  </div>
                </div>

                <div class="wspxp-desc-box">${descHTML}</div>
              </div>

              <div class="wspxp-col-right">
                <div class="wspxp-palette-bar">
                  <div class="wspxp-palette-active">
                    <div class="wspxp-sq-black"></div>
                    <div class="wspxp-sq-white"></div>
                  </div>
                  <div class="wspxp-palette-grid">
                    <div style="background:#000;"></div><div style="background:#808080;"></div><div style="background:#800000;"></div><div style="background:#808000;"></div><div style="background:#008000;"></div><div style="background:#008080;"></div><div style="background:#000080;"></div><div style="background:#800080;"></div><div style="background:#808040;"></div><div style="background:#004040;"></div><div style="background:#0080ff;"></div><div style="background:#004080;"></div><div style="background:#4000ff;"></div><div style="background:#804000;"></div>
                    <div style="background:#fff;"></div><div style="background:#c0c0c0;"></div><div style="background:#ff0000;"></div><div style="background:#ffff00;"></div><div style="background:#00ff00;"></div><div style="background:#00ffff;"></div><div style="background:#0000ff;"></div><div style="background:#ff00ff;"></div><div style="background:#ffff80;"></div><div style="background:#00ff80;"></div><div style="background:#80ffff;"></div><div style="background:#8080ff;"></div><div style="background:#ff0080;"></div><div style="background:#ff8040;"></div>
                  </div>
                </div>

                <div class="wspxp-cat-title">∨ CATEGORIES</div>
                <div class="wspxp-cat-wrap">
                  <div class="wspxp-cat-list">
                    <div class="wspxp-cat-item"><div class="wspxp-cat-icon"><img src="https://i.imgur.com/2qB8hQS.png"></div><div class="wspxp-cat-name">MAINTENANCE</div></div>
                    <div class="wspxp-cat-item"><div class="wspxp-cat-icon"><img src="https://i.imgur.com/5fD2uBO.png"></div><div class="wspxp-cat-name">NETWORKING</div></div>
                    <div class="wspxp-cat-item"><div class="wspxp-cat-icon"><img src="https://i.imgur.com/uc6kjTG.png"></div><div class="wspxp-cat-name">DEPLOYMENT</div></div>
                    <div class="wspxp-cat-item"><div class="wspxp-cat-icon"><img src="https://i.imgur.com/ylZDXuY.png"></div><div class="wspxp-cat-name">PERIPHERALS</div></div>
                    <div class="wspxp-cat-item"><div class="wspxp-cat-icon"><img src="https://i.imgur.com/yLlIdL1.png"></div><div class="wspxp-cat-name">DOCUMENTATION</div></div>
                  </div>
                  <div class="wspxp-scrollbar"><div class="wspxp-scrollbar-thumb"></div></div>
                </div>
              </div>
            </div>

            <div class="wspxp-taskbar">
              <div class="wspxp-taskbar-left">
                <div class="wspxp-btn-start">START</div>
                <div class="wspxp-btn-home">HOME</div>
              </div>
              <div class="wspxp-btn-back">BACK</div>
            </div>
          </div>

          <div class="wspxp-footer">Simon Kyle • Asteria Leuruna</div>
        </div>
      </div>
    `;
  });
});
