import './home.css';
import { useTheme } from '../hooks';

export default function Home() {
  const [theme] = useTheme();
  let logoLink = getLogo(theme);
  
  return (
  <div className="home">
    <div className="logo">
      <img src={logoLink} alt="Logo" />
    </div>
    <div className="title">
      <h3>Welcome to</h3>
      <h1>EditorX</h1>
    </div>
    <section>
      <p className="content">
        Welcome to <strong>EditorX</strong>, an Online code editor based on <strong><a href="https://ace.c9.io" target="_blank" rel="noreferrer">Ace.JS</a></strong>. Every developer must use this for best coding experience with syntax highlighting, live code autocompletion, standard code snippets, advance keyboard shortcuts and many more.
      </p>
    </section>
    <hr />
    <section>
      <h3>What we offer...</h3>
      <ol>
        <li>
          <a href="#file-system">File System.</a>
        </li>
        <li>
          <a href="#editor-customizations">Customize the Editor.</a>
        </li>
        <li>
          <a href="#fonts">15+ Fonts.</a>
        </li>
        <li>
          <a href="#themes">35+ Themes.</a>
        </li>
        <li>
          <a href="#keybinding">4 Standard editors based keyboard shortcuts.</a>
        </li>
        <li>
          <a href="#execute">Execute 8 different languages.</a>
        </li>
        <li>
          <a href="#thanks">Special Thanks</a>
        </li>
      </ol>
    </section>
    <hr />
    <section id="file-system">
      <h3>File System</h3>
      <div className="content-wrapper">
        <div className="img-wrapper">
          <img src="/static/images/files.png" alt="File System" />
      </div>
        <div className="written-wrapper">
          <p className="content">
            We offer an easy and interactive file system to easily handle multiple files. You can access it in <strong>Files</strong> tab in sidebar. All you have to do is just enter the file name and click on <strong>&#10004;</strong> symbol, our system will detect your programming language and will enable corresponding snippets for you. You must enter appropriate extension, our system will use this extension only to detect language. If our system failed to detect it, it will consider your file as plain text file.
        </p>
          <p className="content">
            You can rename, delete or download your file easily. Just click on <strong>setting</strong> symbol next to the file name, and the pop up will be shown to do all this tasks.
        </p>
      </div>
      </div>
    </section>
    <hr />
    <section id="editor-customizations">
      <h3>Customize the Editor.</h3>
      <div className="content-wrapper reverse">
        <div className="img-wrapper">
          <img src="/static/images/config.png" alt="Customizations" />
      </div>
        <div className="written-wrapper">
          <p className="content">
            You can easily customize the defalt behaviour of our editor. Just visit the <strong>Settings</strong> tab. You can change font size, tab size as per your comfort. we have provided lot of settings to you. Just play with it to come up with best suitable configuration for you.
        </p>
      </div>
      </div>
    </section>
    <hr />
    <section id="fonts">
      <h3>15+ Fonts.</h3>
      <div className="content-wrapper">
        <div className="img-wrapper">
          <img src="/static/images/fonts.png" alt="Fonts" />
      </div>
        <div className="written-wrapper">
          <p className="content">
            Not confortable with current font? dont worry!!! Just checkout Font styles tab. We have collected 15+ fonts for you which are most loved by world wide programmers. You can use any of them.
        </p>
      </div>
      </div>
    </section>
    <hr />
    <section id="themes">
      <h3>35+ Themes.</h3>
      <div className="content-wrapper reverse">
        <div className="img-wrapper">
          <img src="/static/images/themes.png" alt="Themes" />
      </div>
        <div className="written-wrapper">
          <p className="content">
            Are you a night owl or an early bird? Actually its doesn't matter for us. We welcome both of them. How? Just check Themes tab. Surprised? You have to. We have collection of 35+ Themes so that you will never get boared of them. Use different everyday and still you will need more than a month to use each of them. So, start using from today itself.
        </p>
      </div>
      </div>
    </section>
    <hr />
    <section id="keybinding">
      <h3>4 Standard editors based keyboard shortcuts.</h3>
      <div className="content-wrapper">
        <div className="img-wrapper">
          <img src="/static/images/keybindings.png" alt="KeyBindings" />
      </div>
        <div className="written-wrapper">
          <p className="content">
            We have option for 4 different keyboard shortcuts handlers which are of Emacs Editor, Sublime Text Editor, Vim Editor, VS Code Editor. You can use any one of them and can your favourite browsers experience right here.
        </p>
      </div>
      </div>
    </section>
    <hr />
    <section id="execute">
      <h3>Execute 8 different languages.</h3>
      <div className="content-wrapper reverse">
        <div className="img-wrapper">
          <img src="/static/images/execute.png" alt="Execution" />
      </div>
        <div className="written-wrapper">
          <p className="content">
            Our name is EditorX, but we are not only limited to editor. Yes you guessed it correctly. You can execute 8 different programming languages right here in this editor. This languages are C, C++, C#, Java, Kotlin, Python, Ruby, Swift. We guess that most of the beginners starts there journey with one of this languages. They can use our editor to execute there code instantly.
        </p>
      </div>
      </div>
    </section>
    <hr />
    <section id="thanks">
      <h3>Special Thanks.</h3>
      <div className="content-wrapper">
        <ol>
          <li>
            <strong><a href="https://ace.c9.io" target="_blank" rel="noreferrer">Ace.JS: </a></strong><br />
            AceJS is a online editor written in JavaScript. Our editor is based on AceJS.
          </li>
          <li>
            <strong><a href="https://github.com/Jaagrav/CodeX" target="_blank" rel="noreferrer">CodeX: </a></strong><br />
            CodeX is has API endpoint where we can compile and execute our code online. Thanks to CodeX, we can provide code execution for 8 languages because of it. CodeX is developed by <a href="https://github.com/Jaagrav" target="_blank" rel="noreferrer">Jaagrav</a>
          </li>
      </ol>
      </div>
    </section>
  </div>
  );
}

  function getLogo(theme) {
    if (theme === 'light') {
      return '/static/images/logo-both.jpg';
    } else {
      let arr = ['/static/images/logo-both.jpg',
        '/static/images/logo-dark.png']
      return arr[Math.floor(Math.random()*2)];
    }
  }