import { Img } from '@chakra-ui/react';
import searchPlaceholder from '../images/search-item.gif';


export const SearchGIF = () => {
    return (
        <>
            <div className='searchGifDiv'>
                <br />
                <Img
                 boxSize='500px'
                //  objectFit='cover'
                src={searchPlaceholder} />
                
            </div>
        </>
    );
};