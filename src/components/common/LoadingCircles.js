import { Circles } from 'react-loader-spinner'

export default function LoadingCircles({ color, size }) {
    return (
        <Circles
            height={size}
            width={size}
            color={color}
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}