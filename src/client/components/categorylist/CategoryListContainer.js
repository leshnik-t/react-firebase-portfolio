import './category-list-container.css';
import { Link } from 'react-router-dom';
import categoryListLinks from '../../config/categoryListLinks';
import categoryImage_0 from '../../assets/images/category-images/web-design-frontend-development.jpg';
import categoryImage_1 from '../../assets/images/category-images/javascript-small-games.jpg';
import categoryImage_2 from '../../assets/images/category-images/email-newsletter-design-development.jpg';
import categoryImage_3 from '../../assets/images/category-images/video-editing-effects.jpg';
import categoryImage_4 from '../../assets/images/category-images/web-banners.jpg';
import categoryImage_5 from '../../assets/images/category-images/logo-design.jpg';



const CategoryListContainer = () => {
    const imageArray = [
        categoryImage_0, categoryImage_1, categoryImage_2,
        categoryImage_3, categoryImage_4, categoryImage_5
    ];
    
    return (
        <div className="category-list-container">
            <h2>Go ahead and check out <span className="text-red">my work</span></h2>
            <div className="row gx-5 gy-5">
                {categoryListLinks.map((item, index) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={item.id}>
                            <Link to={item.path} title={item.title} className="category-link text-center">
                                <div className="category-block">
                                    <div className="category-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="category-image">
                                        <img 
                                            src={imageArray[index]} 
                                            alt={item.title} 
                                            className="img-fluid" 
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default CategoryListContainer;