import './sidebar.css';
import Tab from './tab';
import Switch from './switch';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Tab caption="Files" childs={4}>
        <p>array.c</p>
        <p>function.js</p>
        <p>classss.py</p>
        <p>password.txt</p>
      </Tab>
      <Tab caption="Settings" childs={7}>
        <div>
          <p>Font Size</p>
          <p className="hasInput">14</p>
        </div>
        <div>
          <p>Wrap Lines</p>
          <Switch />
        </div>
        <div>
          <p>Code Autocompletion</p>
          <Switch enabled/>
        </div>
        <div>
          <p>Code Snippets</p>
          <Switch enabled/>
        </div>
        <div>
          <p>Tab Size</p>
          <p className="hasInput">4</p>
        </div>
        <div>
          <p>Line Numbers</p>
          <Switch enabled/>
        </div>
        <div>
          <p>Highlight Active Line</p>
          <Switch enabled/>
        </div>
      </Tab>
      <Tab caption="Themes" childs={0}>
      </Tab>
      <Tab caption="Key Bindings" childs={0}>
      </Tab>
      <Tab caption="Font Family" childs={0}>
      </Tab>
    </div>
  )
}