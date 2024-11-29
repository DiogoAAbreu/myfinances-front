import { Circles } from 'react-loader-spinner'

export default function LoadingCircles() {
    return (
        <Circles
            height="35"
            width="35"
            color="#fff4e6"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}