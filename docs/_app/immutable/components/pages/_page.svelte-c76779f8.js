import{K as St,S as be,i as _e,s as Ie,k as h,q as s,a as P,l as m,m as c,r as o,h as e,c as j,n as b,b as g,F as a,B as ce,C as Tt,E as Ne,u as Se,G as At,H as Pt,I as jt,f as ie,t as he,w as ve,x as Te,y as ye,z as we,L as Ze,M as Dt,N as et,d as Et,O as Ht,P as Wt,o as Ot,Q as Mt,g as $t,v as bt,e as _t}from"../../chunks/index-9e03c306.js";function Ct(d,{delay:t=0,duration:i=400,easing:n=St}={}){const l=+getComputedStyle(d).opacity;return{delay:t,duration:i,easing:n,css:_=>`opacity: ${_*l}`}}const qe={STELLATA:"stellata-waterway",AUTUMN_DAY:"an-autumn-day",VIOLET_SNAIL:"the-harrowing-life-of-the-violet-snail",STONES:"stones",GOODBYE_MONSTER:"goodbyemonster",MONSTER_CRIES:"monster-cry-generator"},Ke={ids:qe,info:[{type:"itch",user:"mattmora",id:qe.STELLATA,role:"Solo project",date:"2022",brief:"A retro-styled infinite runner with high-action movement that takes inspiration from games of the 90s and early 2000s."},{type:"itch",user:"mattmora",id:qe.VIOLET_SNAIL,role:"Solo project",date:"2022",brief:"An interactive rendering of an article about a sea snail by Dr. Rebecca Helm, professor of marine biology at Georgetown University."},{type:"itch",user:"mattmora",id:qe.STONES,role:"Solo project",date:"2022",brief:"A small 3D physics-based sound toy."}]};function qt(d){let t,i,n,l,_,p,A,$,D,z,F,E,B,K,N,G,I,S,q,J,y,H,T,C,U,W,V,Q;return{c(){t=h("h2"),i=s("About"),n=P(),l=h("hr"),_=P(),p=h("p"),A=s(`I'm a game designer and programmer currently pursuing an MFA at the NYU Game Center. In addition\r
	to game design, I have a background in music composition and audio programming, and I dabble in 2D\r
	art and animation.`),$=P(),D=h("p"),z=s(`I'm interested in generative and procedural systems, emergent play, experimental games, music\r
	games, web games, and more.`),F=P(),E=h("p"),B=s(`Currently, I mostly make lots of small games and prototypes, which are available on my\r
	`),K=h("a"),N=s("itch.io"),G=s(" page."),I=P(),S=h("p"),q=s(`You can read reflections on the design and development of a few of my games by selecting the\r
	panels below.`),J=P(),y=h("p"),H=s("You can contact me via email at "),T=h("a"),C=s("mattwmora@gmail.com"),U=s(` or on\r
	Discord as mattmora#7958, and you can see my resume\r
	`),W=h("a"),V=s("here"),Q=s("."),this.h()},l(f){t=m(f,"H2",{});var k=c(t);i=o(k,"About"),k.forEach(e),n=j(f),l=m(f,"HR",{}),_=j(f),p=m(f,"P",{});var r=c(p);A=o(r,`I'm a game designer and programmer currently pursuing an MFA at the NYU Game Center. In addition\r
	to game design, I have a background in music composition and audio programming, and I dabble in 2D\r
	art and animation.`),r.forEach(e),$=j(f),D=m(f,"P",{});var O=c(D);z=o(O,`I'm interested in generative and procedural systems, emergent play, experimental games, music\r
	games, web games, and more.`),O.forEach(e),F=j(f),E=m(f,"P",{});var u=c(E);B=o(u,`Currently, I mostly make lots of small games and prototypes, which are available on my\r
	`),K=m(u,"A",{href:!0,target:!0,rel:!0});var M=c(K);N=o(M,"itch.io"),M.forEach(e),G=o(u," page."),u.forEach(e),I=j(f),S=m(f,"P",{});var L=c(S);q=o(L,`You can read reflections on the design and development of a few of my games by selecting the\r
	panels below.`),L.forEach(e),J=j(f),y=m(f,"P",{class:!0});var w=c(y);H=o(w,"You can contact me via email at "),T=m(w,"A",{href:!0});var x=c(T);C=o(x,"mattwmora@gmail.com"),x.forEach(e),U=o(w,` or on\r
	Discord as mattmora#7958, and you can see my resume\r
	`),W=m(w,"A",{href:!0,target:!0,rel:!0});var R=c(W);V=o(R,"here"),R.forEach(e),Q=o(w,"."),w.forEach(e),this.h()},h(){b(K,"href","https://mattmora.itch.io"),b(K,"target","_blank"),b(K,"rel","noopener noreferrer"),b(T,"href","mailto:mattwmora@gmail.com"),b(W,"href","/Matt_Wang_Resume.pdf"),b(W,"target","_blank"),b(W,"rel","noopener noreferrer"),b(y,"class","final")},m(f,k){g(f,t,k),a(t,i),g(f,n,k),g(f,l,k),g(f,_,k),g(f,p,k),a(p,A),g(f,$,k),g(f,D,k),a(D,z),g(f,F,k),g(f,E,k),a(E,B),a(E,K),a(K,N),a(E,G),g(f,I,k),g(f,S,k),a(S,q),g(f,J,k),g(f,y,k),a(y,H),a(y,T),a(T,C),a(y,U),a(y,W),a(W,V),a(y,Q)},p:ce,i:ce,o:ce,d(f){f&&e(t),f&&e(n),f&&e(l),f&&e(_),f&&e(p),f&&e($),f&&e(D),f&&e(F),f&&e(E),f&&e(I),f&&e(S),f&&e(J),f&&e(y)}}}class Kt extends be{constructor(t){super(),_e(this,t,null,qt,Ie,{})}}function Nt(d){let t,i,n=d[0].title+"",l,_,p,A=d[0].role+", "+d[0].date,$,D,z,F,E,B,K=d[0].brief+"",N,G,I,S,q,J,y,H,T,C,U,W,V;const Q=d[2].default,f=Tt(Q,d,d[1],null);return{c(){t=h("section"),i=h("h2"),l=s(n),_=P(),p=h("h4"),$=s(A),D=P(),z=h("hr"),F=P(),E=h("p"),B=h("b"),N=s(K),G=P(),I=h("div"),S=h("div"),q=h("a"),J=s("View on itch.io"),H=P(),T=h("img"),W=P(),f&&f.c(),this.h()},l(k){t=m(k,"SECTION",{});var r=c(t);i=m(r,"H2",{});var O=c(i);l=o(O,n),O.forEach(e),_=j(r),p=m(r,"H4",{class:!0});var u=c(p);$=o(u,A),u.forEach(e),D=j(r),z=m(r,"HR",{}),F=j(r),E=m(r,"P",{class:!0});var M=c(E);B=m(M,"B",{});var L=c(B);N=o(L,K),L.forEach(e),M.forEach(e),G=j(r),I=m(r,"DIV",{});var w=c(I);S=m(w,"DIV",{class:!0});var x=c(S);q=m(x,"A",{href:!0,target:!0,rel:!0,class:!0});var R=c(q);J=o(R,"View on itch.io"),R.forEach(e),H=j(x),T=m(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(e),W=j(w),f&&f.l(w),w.forEach(e),r.forEach(e),this.h()},h(){b(p,"class","svelte-d56nw6"),b(E,"class","svelte-d56nw6"),b(q,"href",y=d[0].url),b(q,"target","_blank"),b(q,"rel","noopener noreferrer"),b(q,"class","svelte-d56nw6"),Ne(T.src,C=d[0].cover_image)||b(T,"src",C),b(T,"alt",U=d[0].title+" cover image"),b(T,"class","svelte-d56nw6"),b(S,"class","float svelte-d56nw6")},m(k,r){g(k,t,r),a(t,i),a(i,l),a(t,_),a(t,p),a(p,$),a(t,D),a(t,z),a(t,F),a(t,E),a(E,B),a(B,N),a(t,G),a(t,I),a(I,S),a(S,q),a(q,J),a(S,H),a(S,T),a(I,W),f&&f.m(I,null),V=!0},p(k,[r]){(!V||r&1)&&n!==(n=k[0].title+"")&&Se(l,n),(!V||r&1)&&A!==(A=k[0].role+", "+k[0].date)&&Se($,A),(!V||r&1)&&K!==(K=k[0].brief+"")&&Se(N,K),(!V||r&1&&y!==(y=k[0].url))&&b(q,"href",y),(!V||r&1&&!Ne(T.src,C=k[0].cover_image))&&b(T,"src",C),(!V||r&1&&U!==(U=k[0].title+" cover image"))&&b(T,"alt",U),f&&f.p&&(!V||r&2)&&At(f,Q,k,k[1],V?jt(Q,k[1],r,null):Pt(k[1]),null)},i(k){V||(ie(f,k),V=!0)},o(k){he(f,k),V=!1},d(k){k&&e(t),f&&f.d(k)}}}function Vt(d,t,i){let{$$slots:n={},$$scope:l}=t,{game:_}=t;return d.$$set=p=>{"game"in p&&i(0,_=p.game),"$$scope"in p&&i(1,l=p.$$scope)},[_,l,n]}class tt extends be{constructor(t){super(),_e(this,t,Vt,Nt,Ie,{game:0})}}function Lt(d){let t,i,n,l,_,p,A,$,D,z,F,E,B,K,N,G,I,S,q,J,y,H,T,C,U,W,V,Q,f,k,r,O,u,M,L,w,x,R,Y,Z,ee,te,oe,ae,re,de,le,Ve,Le,Ae,fe,xe,Pe,ue,Be,je,me,Ge,ke,ze,Re,De,pe,Fe,He,se,Ue,Ee,Ye,Qe,$e,Je,Xe;return{c(){t=h("p"),i=h("i"),n=s("Stellata Waterway"),l=s(` started as a recreation of the systems and mechanics of one of my\r
		favorite games as kid (and still), `),_=h("i"),p=s("Klonoa 2: Lunatea's Veil"),A=s(`. Specifically, my design is\r
		directly based on\r
		`),$=h("a"),D=s("the first phase of the game's final boss"),z=s("."),F=P(),E=h("h3"),B=s("Making the game"),K=P(),N=h("p"),G=s("I started with the space and movement system, trying to recreate aspects of "),I=h("i"),S=s("Klonoa"),q=s(`'s\r
		design that I liked. One was the movement around the tunnel, which has a certain sense of\r
		inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
		immediately stop rotating when the player stops moving to the side. Another was the camera\r
		position, which is slightly below the tunnel's center and angled slightly downward, which\r
		compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
		the space feel larger.`),J=P(),y=h("p"),H=s("But for various parts of the movement system, I chose to stray from "),T=h("i"),C=s("Klonoa"),U=s(`'s design.\r
		`),W=h("i"),V=s("Klonoa"),Q=s(` is a rather slow game which suits its tone. But I was interested in making\r
		something more action-oriented, so the player moves much faster than in `),f=h("i"),k=s("Klonoa"),r=s(`. Likewise,\r
		`),O=h("i"),u=s("Klonoa"),M=s(`\r
		has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
		what I was making, so I left it out. In general, as my game came together, it started to form its\r
		own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
		double jump system to `),L=h("i"),w=s("Klonoa"),x=s(", though more organically than as a recreation."),R=P(),Y=h("p"),Z=s(`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
		system. I had implemented nearly every other mechanic in the game and while testing just\r
		happened to hit a star while midair. It was immediately obvious that doing so should give the\r
		player another jump. This mechanic became a central part of what makes the game fun and\r
		challenging. It's by no means an innovative mechanic (plenty of platformers including `),ee=h("i"),te=s("Klonoa"),oe=s(` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
		I hope to repeat.`),ae=P(),re=h("p"),de=s(`The last thing I made was the level. As another game made in one week, making a boss or a level\r
		with a satisfying end seemed out of scope, so I decided to again diverge from `),le=h("i"),Ve=s("Klonoa"),Le=s(` and create\r
		an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
		clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
		issues with the design, such as level readability at high speed and extreme bias towards certain\r
		scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Ae=P(),fe=h("h3"),xe=s("Playing my own games"),Pe=P(),ue=h("p"),Be=s(`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
		it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
		one-time-experience games as their designer, but that doesn't mean their worse), but it's a\r
		valuable observation to make in developing my design process. I enjoy action-oriented games and\r
		I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
		want to make more action-oriented games, I need to question what about my current circumstances,\r
		intuitions, and processes as designer might be drawing me away from doing so.`),je=P(),me=h("p"),Ge=s(`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
		game than simply to be fun. I avoided that thinking with `),ke=h("i"),ze=s("Stellata Waterway"),Re=s(` because it was\r
		intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
		interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
		ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
		to think less conceptually and just incrementally build on small features that excite me.`),De=P(),pe=h("h3"),Fe=s("Tunnel runners"),He=P(),se=h("p"),Ue=s(`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
		have likened it to Vectrex games, a sequence in `),Ee=h("i"),Ye=s("Spyro the Dragon"),Qe=s(`, and\r
		`),$e=h("i"),Je=s("Sonic the Hedgehog 2"),Xe=s(`. While none of those were on my mind when making this, it's\r
		interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
		uncommon spatial system.`),this.h()},l(v){t=m(v,"P",{});var X=c(t);i=m(X,"I",{});var at=c(i);n=o(at,"Stellata Waterway"),at.forEach(e),l=o(X,` started as a recreation of the systems and mechanics of one of my\r
		favorite games as kid (and still), `),_=m(X,"I",{});var nt=c(_);p=o(nt,"Klonoa 2: Lunatea's Veil"),nt.forEach(e),A=o(X,`. Specifically, my design is\r
		directly based on\r
		`),$=m(X,"A",{href:!0,target:!0,rel:!0});var it=c($);D=o(it,"the first phase of the game's final boss"),it.forEach(e),z=o(X,"."),X.forEach(e),F=j(v),E=m(v,"H3",{});var rt=c(E);B=o(rt,"Making the game"),rt.forEach(e),K=j(v),N=m(v,"P",{});var We=c(N);G=o(We,"I started with the space and movement system, trying to recreate aspects of "),I=m(We,"I",{});var st=c(I);S=o(st,"Klonoa"),st.forEach(e),q=o(We,`'s\r
		design that I liked. One was the movement around the tunnel, which has a certain sense of\r
		inertia. The tunnel and camera don't immediately rotate to center the player and they don't\r
		immediately stop rotating when the player stops moving to the side. Another was the camera\r
		position, which is slightly below the tunnel's center and angled slightly downward, which\r
		compared to a centered and forward facing camera, as I first tried, is more readable and makes\r
		the space feel larger.`),We.forEach(e),J=j(v),y=m(v,"P",{});var ne=c(y);H=o(ne,"But for various parts of the movement system, I chose to stray from "),T=m(ne,"I",{});var ot=c(T);C=o(ot,"Klonoa"),ot.forEach(e),U=o(ne,`'s design.\r
		`),W=m(ne,"I",{});var lt=c(W);V=o(lt,"Klonoa"),lt.forEach(e),Q=o(ne,` is a rather slow game which suits its tone. But I was interested in making\r
		something more action-oriented, so the player moves much faster than in `),f=m(ne,"I",{});var ht=c(f);k=o(ht,"Klonoa"),ht.forEach(e),r=o(ne,`. Likewise,\r
		`),O=m(ne,"I",{});var mt=c(O);u=o(mt,"Klonoa"),mt.forEach(e),M=o(ne,`\r
		has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to\r
		what I was making, so I left it out. In general, as my game came together, it started to form its\r
		own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar\r
		double jump system to `),L=m(ne,"I",{});var ct=c(L);w=o(ct,"Klonoa"),ct.forEach(e),x=o(ne,", though more organically than as a recreation."),ne.forEach(e),R=j(v),Y=m(v,"P",{});var Oe=c(Y);Z=o(Oe,`Coming up with the double jump system was a memorable moment to me in "finding the fun" in a\r
		system. I had implemented nearly every other mechanic in the game and while testing just\r
		happened to hit a star while midair. It was immediately obvious that doing so should give the\r
		player another jump. This mechanic became a central part of what makes the game fun and\r
		challenging. It's by no means an innovative mechanic (plenty of platformers including `),ee=m(Oe,"I",{});var dt=c(ee);te=o(dt,"Klonoa"),dt.forEach(e),oe=o(Oe,` feature similar mechanics), but the way I arrived at it through making and testing is a process\r
		I hope to repeat.`),Oe.forEach(e),ae=j(v),re=m(v,"P",{});var Me=c(re);de=o(Me,`The last thing I made was the level. As another game made in one week, making a boss or a level\r
		with a satisfying end seemed out of scope, so I decided to again diverge from `),le=m(Me,"I",{});var ft=c(le);Ve=o(ft,"Klonoa"),ft.forEach(e),Le=o(Me,` and create\r
		an infinite runner. I designed a basic level that could loop, added a scoring system to provide a\r
		clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few\r
		issues with the design, such as level readability at high speed and extreme bias towards certain\r
		scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.`),Me.forEach(e),Ae=j(v),fe=m(v,"H3",{});var ut=c(fe);xe=o(ut,"Playing my own games"),ut.forEach(e),Pe=j(v),ue=m(v,"P",{});var pt=c(ue);Be=o(pt,`Of all of my games, this is the one I probably enjoy playing the most, which I don't think means\r
		it's better (certainly it's hard to properly enjoy narrative, puzzle, or other\r
		one-time-experience games as their designer, but that doesn't mean their worse), but it's a\r
		valuable observation to make in developing my design process. I enjoy action-oriented games and\r
		I can apparently make one, at least to my own taste, yet I have rarely made such games. If I\r
		want to make more action-oriented games, I need to question what about my current circumstances,\r
		intuitions, and processes as designer might be drawing me away from doing so.`),pt.forEach(e),je=j(v),me=m(v,"P",{});var Ce=c(me);Ge=o(Ce,`One idea is that I often get caught up in the idea of having a higher concept or purpose for the\r
		game than simply to be fun. I avoided that thinking with `),ke=m(Ce,"I",{});var gt=c(ke);ze=o(gt,"Stellata Waterway"),gt.forEach(e),Re=o(Ce,` because it was\r
		intended as just a mechanical homage. Instead of concept, I was able to focus on small features and\r
		interactions that I enjoyed, and I found that even without a driving concept, new and interesting\r
		ideas came out of the processing of making. Maybe if I want to make more games like this, I need\r
		to think less conceptually and just incrementally build on small features that excite me.`),Ce.forEach(e),De=j(v),pe=m(v,"H3",{});var vt=c(pe);Fe=o(vt,"Tunnel runners"),vt.forEach(e),He=j(v),se=m(v,"P",{class:!0});var ge=c(se);Ue=o(ge,`Since finishing this game, I've also enjoyed hearing what games it reminds people of. People\r
		have likened it to Vectrex games, a sequence in `),Ee=m(ge,"I",{});var yt=c(Ee);Ye=o(yt,"Spyro the Dragon"),yt.forEach(e),Qe=o(ge,`, and\r
		`),$e=m(ge,"I",{});var wt=c($e);Je=o(wt,"Sonic the Hedgehog 2"),wt.forEach(e),Xe=o(ge,`. While none of those were on my mind when making this, it's\r
		interesting to see more instances of what I've come to call "tunnel runners" as a relatively\r
		uncommon spatial system.`),ge.forEach(e),this.h()},h(){b($,"href","https://youtu.be/6JQQhQK05SY?t=205"),b($,"target","_blank"),b($,"rel","noopener noreferrer"),b(se,"class","final")},m(v,X){g(v,t,X),a(t,i),a(i,n),a(t,l),a(t,_),a(_,p),a(t,A),a(t,$),a($,D),a(t,z),g(v,F,X),g(v,E,X),a(E,B),g(v,K,X),g(v,N,X),a(N,G),a(N,I),a(I,S),a(N,q),g(v,J,X),g(v,y,X),a(y,H),a(y,T),a(T,C),a(y,U),a(y,W),a(W,V),a(y,Q),a(y,f),a(f,k),a(y,r),a(y,O),a(O,u),a(y,M),a(y,L),a(L,w),a(y,x),g(v,R,X),g(v,Y,X),a(Y,Z),a(Y,ee),a(ee,te),a(Y,oe),g(v,ae,X),g(v,re,X),a(re,de),a(re,le),a(le,Ve),a(re,Le),g(v,Ae,X),g(v,fe,X),a(fe,xe),g(v,Pe,X),g(v,ue,X),a(ue,Be),g(v,je,X),g(v,me,X),a(me,Ge),a(me,ke),a(ke,ze),a(me,Re),g(v,De,X),g(v,pe,X),a(pe,Fe),g(v,He,X),g(v,se,X),a(se,Ue),a(se,Ee),a(Ee,Ye),a(se,Qe),a(se,$e),a($e,Je),a(se,Xe)},p:ce,d(v){v&&e(t),v&&e(F),v&&e(E),v&&e(K),v&&e(N),v&&e(J),v&&e(y),v&&e(R),v&&e(Y),v&&e(ae),v&&e(re),v&&e(Ae),v&&e(fe),v&&e(Pe),v&&e(ue),v&&e(je),v&&e(me),v&&e(De),v&&e(pe),v&&e(He),v&&e(se)}}}function xt(d){let t,i;return t=new tt({props:{game:d[0],$$slots:{default:[Lt]},$$scope:{ctx:d}}}),{c(){ve(t.$$.fragment)},l(n){Te(t.$$.fragment,n)},m(n,l){ye(t,n,l),i=!0},p(n,[l]){const _={};l&1&&(_.game=n[0]),l&2&&(_.$$scope={dirty:l,ctx:n}),t.$set(_)},i(n){i||(ie(t.$$.fragment,n),i=!0)},o(n){he(t.$$.fragment,n),i=!1},d(n){we(t,n)}}}function Bt(d,t,i){let{game:n}=t;return d.$$set=l=>{"game"in l&&i(0,n=l.game)},[n]}class Gt extends be{constructor(t){super(),_e(this,t,Bt,xt,Ie,{game:0})}}function zt(d){let t,i,n,l,_,p,A,$,D,z,F,E,B,K,N,G,I,S,q,J,y,H,T,C,U,W,V,Q,f,k,r,O;return{c(){t=h("h3"),i=s("Concept"),n=P(),l=h("p"),_=s(`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
		knew I wanted to make a game from the perspective of an animal with a much more limited\r
		perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
		and second, I had one week to make the game and thought a highly restricted perspective would be\r
		more reasonable to implement in that timeframe.`),p=P(),A=h("p"),$=s(`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
		both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
		in my research, I happened to find `),D=h("a"),z=s("Dr. Helm's blog"),F=s(`\r
		and\r
		`),E=h("a"),B=s("her article"),K=s(` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
		I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
		it felt natural feature the text in the game.`),N=P(),G=h("h3"),I=s("Development"),S=P(),q=h("p"),J=s(`With the concept and permission from Dr. Helm to use her text, putting together the actual\r
		game was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
		visual representation, and interaction.`),y=P(),H=h("p"),T=s(`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
		split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
		parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
		Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),C=P(),U=h("p"),W=s(`Creating the visual representation was a less clear process. Aside from the technical\r
		difficulties of working with some new tools and learning more about shaders, interpretation was\r
		challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
		extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
		the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
		a balance between creative license and realism. I wanted to make the game interesting to play\r
		but not misrepresent the science.`),V=P(),Q=h("p"),f=s(`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
		reading about it. I avoided anything complex that might conflict with the simple existence of\r
		the snail. Instead I focused on minimalistically representing the actions described in the text,\r
		looking, clinging, and making bubbles. I also decided that none of these interactions should\r
		significantly impact what happens in the game (for example, letting go of Space causing you to\r
		stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
		that the perception of effort and struggle that we impose on the snail isn't necessarily\r
		accurate, and therefore the snail may not need to consciously cling to its raft at all.`),k=P(),r=h("p"),O=s(`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
		changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
		her text and for her immensely positive response to the result.`),this.h()},l(u){t=m(u,"H3",{});var M=c(t);i=o(M,"Concept"),M.forEach(e),n=j(u),l=m(u,"P",{});var L=c(l);_=o(L,`The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I\r
		knew I wanted to make a game from the perspective of an animal with a much more limited\r
		perception of the world than humans. First, I feel such perspectives are underexplored in games,\r
		and second, I had one week to make the game and thought a highly restricted perspective would be\r
		more reasonable to implement in that timeframe.`),L.forEach(e),p=j(u),A=m(u,"P",{});var w=c(A);$=o(w,`My first idea was to make a game about a jellyfish, but a bit of research suggested to me that\r
		both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But\r
		in my research, I happened to find `),D=m(w,"A",{href:!0,target:!0,rel:!0});var x=c(D);z=o(x,"Dr. Helm's blog"),x.forEach(e),F=o(w,`\r
		and\r
		`),E=m(w,"A",{href:!0,target:!0,rel:!0});var R=c(E);B=o(R,"her article"),R.forEach(e),K=o(w,` about the violet snail caught my eye. The perspective depicted in the article was exactly what\r
		I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,\r
		it felt natural feature the text in the game.`),w.forEach(e),N=j(u),G=m(u,"H3",{});var Y=c(G);I=o(Y,"Development"),Y.forEach(e),S=j(u),q=m(u,"P",{});var Z=c(q);J=o(Z,`With the concept and permission from Dr. Helm to use her text, putting together the actual\r
		game was relatively straightforward as I aimed to emphasize and add to the text through pacing,\r
		visual representation, and interaction.`),Z.forEach(e),y=j(u),H=m(u,"P",{});var ee=c(H);T=o(ee,`Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to\r
		split the text into sort of poetic lines and time each line accordingly. Where I saw lists or\r
		parallel phrases in the text, I created parallel lines and paced them as continuous sequences.\r
		Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.`),ee.forEach(e),C=j(u),U=m(u,"P",{});var te=c(U);W=o(te,`Creating the visual representation was a less clear process. Aside from the technical\r
		difficulties of working with some new tools and learning more about shaders, interpretation was\r
		challenge. While the source text is very descriptive, there are some gray areas, such as to what\r
		extent the snail is blind (completely blind versus an extremely limited sense of light). With\r
		the limited timeframe, I made choices based on intuition and convenience while trying to achieve\r
		a balance between creative license and realism. I wanted to make the game interesting to play\r
		but not misrepresent the science.`),te.forEach(e),V=j(u),Q=m(u,"P",{});var oe=c(Q);f=o(oe,`For interaction, I wanted to help the player engage with the snail's perspective beyond just\r
		reading about it. I avoided anything complex that might conflict with the simple existence of\r
		the snail. Instead I focused on minimalistically representing the actions described in the text,\r
		looking, clinging, and making bubbles. I also decided that none of these interactions should\r
		significantly impact what happens in the game (for example, letting go of Space causing you to\r
		stop clinging and sink) both for simplicity's sake and because the closing point of the text is\r
		that the perception of effort and struggle that we impose on the snail isn't necessarily\r
		accurate, and therefore the snail may not need to consciously cling to its raft at all.`),oe.forEach(e),k=j(u),r=m(u,"P",{class:!0});var ae=c(r);O=o(ae,`All said and done, I'm very happy with how the game turned out, and there are honestly no major\r
		changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use\r
		her text and for her immensely positive response to the result.`),ae.forEach(e),this.h()},h(){b(D,"href","https://jellybiologist.com/"),b(D,"target","_blank"),b(D,"rel","noopener noreferrer"),b(E,"href","https://jellybiologist.com/2020/08/03/the-harrowing-life-of-the-violet-snail/"),b(E,"target","_blank"),b(E,"rel","noopener noreferrer"),b(r,"class","final")},m(u,M){g(u,t,M),a(t,i),g(u,n,M),g(u,l,M),a(l,_),g(u,p,M),g(u,A,M),a(A,$),a(A,D),a(D,z),a(A,F),a(A,E),a(E,B),a(A,K),g(u,N,M),g(u,G,M),a(G,I),g(u,S,M),g(u,q,M),a(q,J),g(u,y,M),g(u,H,M),a(H,T),g(u,C,M),g(u,U,M),a(U,W),g(u,V,M),g(u,Q,M),a(Q,f),g(u,k,M),g(u,r,M),a(r,O)},p:ce,d(u){u&&e(t),u&&e(n),u&&e(l),u&&e(p),u&&e(A),u&&e(N),u&&e(G),u&&e(S),u&&e(q),u&&e(y),u&&e(H),u&&e(C),u&&e(U),u&&e(V),u&&e(Q),u&&e(k),u&&e(r)}}}function Rt(d){let t,i;return t=new tt({props:{game:d[0],$$slots:{default:[zt]},$$scope:{ctx:d}}}),{c(){ve(t.$$.fragment)},l(n){Te(t.$$.fragment,n)},m(n,l){ye(t,n,l),i=!0},p(n,[l]){const _={};l&1&&(_.game=n[0]),l&2&&(_.$$scope={dirty:l,ctx:n}),t.$set(_)},i(n){i||(ie(t.$$.fragment,n),i=!0)},o(n){he(t.$$.fragment,n),i=!1},d(n){we(t,n)}}}function Ft(d,t,i){let{game:n}=t;return d.$$set=l=>{"game"in l&&i(0,n=l.game)},[n]}class Ut extends be{constructor(t){super(),_e(this,t,Ft,Rt,Ie,{game:0})}}function Yt(d){let t,i,n,l,_,p,A,$,D,z,F,E,B,K,N,G,I,S,q,J,y,H,T,C,U,W,V,Q,f,k;return{c(){t=h("h3"),i=s("Sound toys and instruments"),n=P(),l=h("p"),_=s(`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
		for performance or be capable of producing conventional music, but that they are interfaces that\r
		map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
		difference between the input-mapping-to-sound structure of an instrument in a DAW and `),p=h("i"),A=s("Electroplankton"),$=s("; they just differ in their affordances."),D=P(),z=h("p"),F=s(`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
		the affordances of an instrument's interface define that instrument even more than its sound.\r
		This is important because while game engines, DAWs, and other digital sound-making tools can\r
		produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
		expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
		a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
		I should leverage what that tool is good at.`),E=P(),B=h("h3"),K=s("Stones"),N=P(),G=h("p"),I=h("i"),S=s("Stones"),q=s(` is a small exploration of one special affordance of Unity and many game engines: physics\r
		simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
		velocity map to sound.`),J=P(),y=h("p"),H=s(`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
		different sound for each texture, then linear velocity controls its volume and angular velocity\r
		controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
		sounds, such as impact transients when the velocities abruptly change on collision. The\r
		different weights of each block texture also create different volume and pitch curves when\r
		dragging them around.`),T=P(),C=h("h3"),U=s("Problems"),W=P(),V=h("p"),Q=h("i"),f=s("Stones"),k=s(` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
		between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
		depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
		prototype and an idea I might like to do more with at some point.`),this.h()},l(r){t=m(r,"H3",{});var O=c(t);i=o(O,"Sound toys and instruments"),O.forEach(e),n=j(r),l=m(r,"P",{});var u=c(l);_=o(u,`I like to think about sound toys as musical instruments. I don't mean that they should be suited\r
		for performance or be capable of producing conventional music, but that they are interfaces that\r
		map to sound, and the affordances of their interfaces define them. There isn't a fundamental\r
		difference between the input-mapping-to-sound structure of an instrument in a DAW and `),p=m(u,"I",{});var M=c(p);A=o(M,"Electroplankton"),M.forEach(e),$=o(u,"; they just differ in their affordances."),u.forEach(e),D=j(r),z=m(r,"P",{});var L=c(z);F=o(L,`Maybe that's self-evident (the structure described is extremely broad), but the point is that\r
		the affordances of an instrument's interface define that instrument even more than its sound.\r
		This is important because while game engines, DAWs, and other digital sound-making tools can\r
		produce the same sounds, they have vastly different built-in affordances, which will tend to be\r
		expressed in their instruments. If I want to make a certain kind of instrument, I should choose\r
		a tool with the appropriate affordances. If I want to use a specific tool to make an instrument,\r
		I should leverage what that tool is good at.`),L.forEach(e),E=j(r),B=m(r,"H3",{});var w=c(B);K=o(w,"Stones"),w.forEach(e),N=j(r),G=m(r,"P",{});var x=c(G);I=m(x,"I",{});var R=c(I);S=o(R,"Stones"),R.forEach(e),q=o(x,` is a small exploration of one special affordance of Unity and many game engines: physics\r
		simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular\r
		velocity map to sound.`),x.forEach(e),J=j(r),y=m(r,"P",{});var Y=c(y);H=o(Y,`The sound generation is actually extremely simple. Each block plays a looping drone sound with a\r
		different sound for each texture, then linear velocity controls its volume and angular velocity\r
		controls its pitch. Even with this simple mapping, the physics can produce some very dynamic\r
		sounds, such as impact transients when the velocities abruptly change on collision. The\r
		different weights of each block texture also create different volume and pitch curves when\r
		dragging them around.`),Y.forEach(e),T=j(r),C=m(r,"H3",{});var Z=c(C);U=o(Z,"Problems"),Z.forEach(e),W=j(r),V=m(r,"P",{class:!0});var ee=c(V);Q=m(ee,"I",{});var te=c(Q);f=o(te,"Stones"),te.forEach(e),k=o(ee,` definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect\r
		between the player cursor and moving around blocks, the isometric view and lack of lighting hurts\r
		depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting\r
		prototype and an idea I might like to do more with at some point.`),ee.forEach(e),this.h()},h(){b(V,"class","final")},m(r,O){g(r,t,O),a(t,i),g(r,n,O),g(r,l,O),a(l,_),a(l,p),a(p,A),a(l,$),g(r,D,O),g(r,z,O),a(z,F),g(r,E,O),g(r,B,O),a(B,K),g(r,N,O),g(r,G,O),a(G,I),a(I,S),a(G,q),g(r,J,O),g(r,y,O),a(y,H),g(r,T,O),g(r,C,O),a(C,U),g(r,W,O),g(r,V,O),a(V,Q),a(Q,f),a(V,k)},p:ce,d(r){r&&e(t),r&&e(n),r&&e(l),r&&e(D),r&&e(z),r&&e(E),r&&e(B),r&&e(N),r&&e(G),r&&e(J),r&&e(y),r&&e(T),r&&e(C),r&&e(W),r&&e(V)}}}function Qt(d){let t,i;return t=new tt({props:{game:d[0],$$slots:{default:[Yt]},$$scope:{ctx:d}}}),{c(){ve(t.$$.fragment)},l(n){Te(t.$$.fragment,n)},m(n,l){ye(t,n,l),i=!0},p(n,[l]){const _={};l&1&&(_.game=n[0]),l&2&&(_.$$scope={dirty:l,ctx:n}),t.$set(_)},i(n){i||(ie(t.$$.fragment,n),i=!0)},o(n){he(t.$$.fragment,n),i=!1},d(n){we(t,n)}}}function Jt(d,t,i){let{game:n}=t;return d.$$set=l=>{"game"in l&&i(0,n=l.game)},[n]}class Xt extends be{constructor(t){super(),_e(this,t,Jt,Qt,Ie,{game:0})}}function It(d,t,i){const n=d.slice();return n[15]=t[i],n}function Zt(d){let t,i,n;var l=d[7][d[4]];function _(p){return{props:{game:p[3][p[4]]}}}return l&&(t=bt(l,_(d))),{c(){t&&ve(t.$$.fragment),i=_t()},l(p){t&&Te(t.$$.fragment,p),i=_t()},m(p,A){t&&ye(t,p,A),g(p,i,A),n=!0},p(p,A){const $={};if(A&24&&($.game=p[3][p[4]]),l!==(l=p[7][p[4]])){if(t){$t();const D=t;he(D.$$.fragment,1,0,()=>{we(D,1)}),Et()}l?(t=bt(l,_(p)),ve(t.$$.fragment),ie(t.$$.fragment,1),ye(t,i.parentNode,i)):t=null}else l&&t.$set($)},i(p){n||(t&&ie(t.$$.fragment,p),n=!0)},o(p){t&&he(t.$$.fragment,p),n=!1},d(p){p&&e(i),t&&we(t,p)}}}function ea(d){let t,i;return t=new Kt({}),{c(){ve(t.$$.fragment)},l(n){Te(t.$$.fragment,n)},m(n,l){ye(t,n,l),i=!0},p:ce,i(n){i||(ie(t.$$.fragment,n),i=!0)},o(n){he(t.$$.fragment,n),i=!1},d(n){we(t,n)}}}function kt(d){let t,i,n,l=d[15].brief+"",_,p,A,$,D,z,F,E,B=d[15].title+"",K,N,G,I,S,q;function J(){return d[11](d[15])}return{c(){t=h("div"),i=h("button"),n=h("p"),_=s(l),p=P(),A=h("figure"),$=h("img"),F=P(),E=h("figcaption"),K=s(B),G=P(),this.h()},l(y){t=m(y,"DIV",{});var H=c(t);i=m(H,"BUTTON",{class:!0});var T=c(i);n=m(T,"P",{class:!0});var C=c(n);_=o(C,l),C.forEach(e),p=j(T),A=m(T,"FIGURE",{class:!0});var U=c(A);$=m(U,"IMG",{src:!0,alt:!0}),F=j(U),E=m(U,"FIGCAPTION",{class:!0});var W=c(E);K=o(W,B),W.forEach(e),U.forEach(e),T.forEach(e),G=j(H),H.forEach(e),this.h()},h(){b(n,"class","overlay svelte-1eqf55d"),Ne($.src,D=d[15].cover_image)||b($,"src",D),b($,"alt",z=d[15].title+" cover image"),b(E,"class","svelte-1eqf55d"),b(A,"class","svelte-1eqf55d"),b(i,"class","panel svelte-1eqf55d"),i.disabled=N=d[4]==d[15].id},m(y,H){g(y,t,H),a(t,i),a(i,n),a(n,_),a(i,p),a(i,A),a(A,$),a(A,F),a(A,E),a(E,K),a(t,G),S||(q=et(i,"click",J),S=!0)},p(y,H){d=y,H&4&&l!==(l=d[15].brief+"")&&Se(_,l),H&4&&!Ne($.src,D=d[15].cover_image)&&b($,"src",D),H&4&&z!==(z=d[15].title+" cover image")&&b($,"alt",z),H&4&&B!==(B=d[15].title+"")&&Se(K,B),H&20&&N!==(N=d[4]==d[15].id)&&(i.disabled=N)},i(y){I||Ze(()=>{I=Mt(t,Ct,{}),I.start()})},o:ce,d(y){y&&e(t),S=!1,q()}}}function ta(d){let t,i,n,l,_,p,A,$,D,z,F,E,B,K,N,G,I,S,q,J,y,H,T,C,U,W,V,Q,f,k;Ze(d[9]);const r=[ea,Zt],O=[];function u(w,x){return w[4]==="about"?0:1}T=u(d),C=O[T]=r[T](d);let M=d[2],L=[];for(let w=0;w<M.length;w+=1)L[w]=kt(It(d,M,w));return{c(){t=h("header"),i=h("button"),n=h("h1"),l=s("Matt Wang"),_=P(),p=h("h5"),A=s("aka matt"),$=h("a"),D=s("mora"),z=s(", (he/him)"),F=P(),E=h("h2"),B=s("Game Designer, Programmer"),K=P(),N=h("hr"),G=P(),I=h("a"),S=s("mattmora.itch.io"),J=P(),y=h("main"),H=h("div"),C.c(),U=P(),W=h("div");for(let w=0;w<L.length;w+=1)L[w].c();this.h()},l(w){t=m(w,"HEADER",{});var x=c(t);i=m(x,"BUTTON",{class:!0});var R=c(i);n=m(R,"H1",{id:!0,class:!0});var Y=c(n);l=o(Y,"Matt Wang"),Y.forEach(e),_=j(R),p=m(R,"H5",{id:!0,class:!0});var Z=c(p);A=o(Z,"aka matt"),$=m(Z,"A",{href:!0,class:!0});var ee=c($);D=o(ee,"mora"),ee.forEach(e),z=o(Z,", (he/him)"),Z.forEach(e),F=j(R),E=m(R,"H2",{id:!0,class:!0});var te=c(E);B=o(te,"Game Designer, Programmer"),te.forEach(e),K=j(R),N=m(R,"HR",{}),G=j(R),I=m(R,"A",{href:!0,target:!0,rel:!0});var oe=c(I);S=o(oe,"mattmora.itch.io"),oe.forEach(e),R.forEach(e),x.forEach(e),J=j(w),y=m(w,"MAIN",{});var ae=c(y);H=m(ae,"DIV",{id:!0,class:!0});var re=c(H);C.l(re),re.forEach(e),U=j(ae),W=m(ae,"DIV",{class:!0,style:!0});var de=c(W);for(let le=0;le<L.length;le+=1)L[le].l(de);de.forEach(e),ae.forEach(e),this.h()},h(){b(n,"id","name"),b(n,"class","svelte-1eqf55d"),b($,"href","/mora"),b($,"class","secret"),b(p,"id","aka"),b(p,"class","svelte-1eqf55d"),b(E,"id","roles"),b(E,"class","svelte-1eqf55d"),b(I,"href","https://mattmora.itch.io"),b(I,"target","_blank"),b(I,"rel","noopener noreferrer"),b(i,"class","panel block"),i.disabled=q=d[4]==="about",b(H,"id","focus"),b(H,"class","block svelte-1eqf55d"),b(W,"class","games svelte-1eqf55d"),b(W,"style",d[6]),Ze(()=>d[12].call(W))},m(w,x){g(w,t,x),a(t,i),a(i,n),a(n,l),a(i,_),a(i,p),a(p,A),a(p,$),a($,D),a(p,z),a(i,F),a(i,E),a(E,B),a(i,K),a(i,N),a(i,G),a(i,I),a(I,S),g(w,J,x),g(w,y,x),a(y,H),O[T].m(H,null),a(y,U),a(y,W);for(let R=0;R<L.length;R+=1)L[R].m(W,null);V=Dt(W,d[12].bind(W)),Q=!0,f||(k=[et(window,"resize",d[9]),et(i,"click",d[10])],f=!0)},p(w,[x]){(!Q||x&16&&q!==(q=w[4]==="about"))&&(i.disabled=q);let R=T;if(T=u(w),T===R?O[T].p(w,x):($t(),he(O[R],1,1,()=>{O[R]=null}),Et(),C=O[T],C?C.p(w,x):(C=O[T]=r[T](w),C.c()),ie(C,1),C.m(H,null)),x&276){M=w[2];let Y;for(Y=0;Y<M.length;Y+=1){const Z=It(w,M,Y);L[Y]?(L[Y].p(Z,x),ie(L[Y],1)):(L[Y]=kt(Z),L[Y].c(),ie(L[Y],1),L[Y].m(W,null))}for(;Y<L.length;Y+=1)L[Y].d(1);L.length=M.length}(!Q||x&64)&&b(W,"style",w[6])},i(w){if(!Q){ie(C);for(let x=0;x<M.length;x+=1)ie(L[x]);Q=!0}},o(w){he(C),Q=!1},d(w){w&&e(t),w&&e(J),w&&e(y),O[T].d(),Ht(L,w),V(),f=!1,Wt(k)}}}function aa(d,t,i){const n={[Ke.ids.STELLATA]:Gt,[Ke.ids.VIOLET_SNAIL]:Ut,[Ke.ids.STONES]:Xt};let l=[],_={},p;Ot(async()=>{Ke.info.forEach(I=>{I.type==="itch"?Itch.getGameData({user:I.user,game:I.id,onComplete:S=>{S=Object.assign(S,I),S.url=`https://${I.user}.itch.io/${I.id}`,i(2,l=[...l,S]),i(3,_[S.id]=S,_)}}):I.type}),p=document.getElementById("focus")});let A="about";const $=I=>{i(4,A=I);const S=p.parentElement.getBoundingClientRect();(S.top<0||S.top>F/2)&&p.parentElement.scrollIntoView()};let D,z,F,E="grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em)";function B(){i(1,z=window.innerWidth),i(5,F=window.innerHeight)}const K=()=>$("about"),N=I=>$(I.id);function G(){D=this.clientWidth,i(0,D)}return d.$$.update=()=>{if(d.$$.dirty&3){const I=Math.min(300,z/3),S=Math.floor(D/I),q=`calc(${100/S}% - ${(S-1)/S}em)`;i(6,E=`grid-template-columns: ${q.repeat(S)}`)}},[D,z,l,_,A,F,E,n,$,B,K,N,G]}class ia extends be{constructor(t){super(),_e(this,t,aa,ta,Ie,{})}}export{ia as default};