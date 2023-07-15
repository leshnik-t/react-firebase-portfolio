import ReferenceImagePostForm from '../components/forms/referenceImagePostForm/ReferenceImagePostForm';
import ReferenceRatingPostForm from '../components/forms/referenceRatingPostForm/ReferenceRatingPostForm';
import WebsitePostForm from '../components/forms/websitePostForm/WebsitePostForm';
import JavascriptPostForm from '../components/forms/javascriptPostForm/JavascriptPostForm';
import EmailPostForm from '../components/forms/emailPostForm/EmailPostForm';
import VideoPostForm from '../components/forms/videoPostForm/VideoPostForm';
import BannerPostForm from '../components/forms/bannerPostForm/BannerPostForm';
import LogoPostForm from '../components/forms/logoPostForm/LogoPostForm';

const renderFormByCollectionName = ( 
        collectionName, 
        handleChangeInput, 
        handleSubmit, 
        item, 
        isEditing, 
        percentage
    ) => {
    switch(collectionName) {
        case 'references-image': return (
            <ReferenceImagePostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'references-rating': return (
            <ReferenceRatingPostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'websaites': return (
            <WebsitePostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'javascript': return (
            <JavascriptPostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'emails': return (
            <EmailPostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'videos': return (
            <VideoPostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'banners': return (
            <BannerPostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        case 'logos': return (
            <LogoPostForm 
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                item={item}
                isEditing={isEditing}
                percentage={percentage}
            />
        )
        default: break;
    }
}

export default renderFormByCollectionName;