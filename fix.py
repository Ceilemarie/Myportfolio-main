
import os

fp = "Myportfolio-main/portfolio.html"
with open(fp, "r", encoding="utf-8") as f:
    html = f.read()

bad_nav = "<a href=\"#Certs\" class=\"nav-link\">Certificates</a>`r`n        <a href=\"#socmed-section\" class=\"nav-link\">Socmed</a>"
good_nav = "<a href=\"#Certs\" class=\"nav-link\">Certificates</a>\n        <a href=\"#socmed-section\" class=\"nav-link\">Socmed</a>"
html = html.replace(bad_nav, good_nav)

with open("Myportfolio-main/socmed.txt", "r", encoding="utf-8") as f:
    socmed = f.read()

import re
html = re.sub(r"<section id=\"socmed-section\" class=\"posts\">[\s\S]*?</section>", socmed, html)

with open(fp, "w", encoding="utf-8") as f:
    f.write(html)

