import './home.css';
import widgetList from './widgetList';
import Widget from '../../components/widget/Widget';

const Home = () => {
    const widgets = widgetList.map((item) => <Widget data={item} key={item.id}/>)
    return (
        <main className="home">
            <h1>Dashboard</h1>
            <div className="widgets">
                {widgets}
            </div>
        </main>
    )
}

export default Home;