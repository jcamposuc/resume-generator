import { CardTemplate } from './components/CardTemplate';
import tp1 from './images/template-1.webp';
import tp2 from './images/template-2.png';
import { Layout } from './components/Layout';

const App = () => (
  <Layout>
    <ul className="flex flex-col items-center gap-5 px-3 md:px-0">
      <li>
        <CardTemplate
          imgSrc={tp1}
          path="/fill-resume?tp=tp-1" />
      </li>
      <li>
        <CardTemplate
          imgSrc={tp2}
          path="/fill-resume?tp=tp-2"
          disabled={true} />
      </li>
    </ul>
  </Layout>
);

export default App;
