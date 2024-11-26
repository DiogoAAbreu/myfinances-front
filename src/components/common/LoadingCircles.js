import { Circles } from 'react-loader-spinner'

export default function LoadingCircles() {
    return (<Circles
        height="40"
        width="40"
        color="#fff4e6"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />)
}