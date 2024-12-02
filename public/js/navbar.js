const body = document.querySelector("body");
const body_before = `
        <section class="film-lines">
            <div class="menu top-menu">
                <ul>
                    <li><a href="lore.html">A1A ECOSYSTEM INDEX</a></li>
                    <li><a href="tools.html">TOOLS</a></li>
                    <li>
                        <img src="aia-eco.jpg" class="logo" />
                    </li>
                    <li><a href="contact.html">SOCIALS</a></li>
                    <li><a href="stats.html">STATS</a></li>
                </ul>
            </div>`;
const body_after = `<div class="menu bottom-menu">
                <ul id="mob-menu">
                    <li><a href="lore.html">>A1A ECOSYSTEM INDEX</a></li>
                    <li><a href="#">TOOLS</a></li>
                    <li><a href="#">SOCIALS</a></li>
                    <li><a href="stats.html">STATS</a></li>
                </ul>
            </div>
        </section>`;
const body_content = body.innerHTML;
body.innerHTML = body_before + body_content + body_after;
