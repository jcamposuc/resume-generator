import { CardTemplate } from './components/CardTemplate';
import tp1 from './images/template-1.webp';
import tp2 from './images/template-2.png';
import tp3 from './images/template-3.jpg';
import { Layout } from './components/Layout';

const App = () => (
  <Layout>
    <ul className="grid grid-cols-1 gap-3 px-3 md:px-0 lg:grid-cols-6">
      <li className='inline-flex lg:block lg:col-span-3 xl:col-span-2 xl:col-start-2'>
        <CardTemplate
          imgSrc={tp1}
          path="/fill-resume?tp=tp-1" />
      </li>
      <li className='inline-flex lg:block lg:col-span-3 xl:col-span-2 lg:col-start-4'>
        <CardTemplate
          imgSrc={tp2}
          path="/fill-resume?tp=tp-1"
          disabled={true} />
      </li>
      <li className='inline-flex lg:block lg:col-span-3 xl:col-start-2 xl:col-span-2'>
        <CardTemplate
          imgSrc={tp3}
          path="/fill-resume?tp=tp-1"
          disabled={true} />
      </li>
    </ul>
  </Layout>
);

export default App;
