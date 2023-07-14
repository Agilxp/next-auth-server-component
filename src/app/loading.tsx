import Spinner from '@/components/Spinner'

const LoadingUI = () => {
    return (
        <div className='w-full h-full pt-6'>
            <Spinner size={24} />
        </div>
    )
}

export default LoadingUI