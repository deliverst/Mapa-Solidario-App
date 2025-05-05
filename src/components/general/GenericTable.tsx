'use client'
import Spinner from '@/components/general/Spinner'
interface genericTableProps {
    data: Record<string, any>[]
    title: string
    subtitle?: string
    extraButtons?: React.ReactNode[]
    customProps?: string[]
    onClickTh?: (event: any) => void
    filterByTh?: {
        value: string
        order: 'ASC'| 'DESC'
    }
    isLoading?: boolean;
}

const GenericTable: React.FC<genericTableProps> = ({
    data = [],
    title,
    subtitle,
    extraButtons,
    customProps = [],
    onClickTh,
    filterByTh,
    isLoading,
}) => {

    const headers = customProps.length > 0 ? customProps : data.length > 0 ? Object.keys(data[0]) : []

    return (
        <>
            <div className="flex flex-col animate-fade-in-up bg-white transition-shadow">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="inline-block min-w-full p-1.5 align-middle">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ">


                            {(title || subtitle) && (
                                <div className="userRouter grid gap-3 border-b border-gray-200 px-6 py-4 md:flex md:items-center md:justify-between">

                                    {/*TITLE AND SUBTITLE*/}
                                    <div>
                                        <h2 className="userRouter text-xl font-semibold text-gray-800">
                                            {title}
                                        </h2>
                                        {subtitle && (
                                            <p className="userRouter text-sm text-gray-600">
                                                {subtitle}
                                            </p>
                                        )}
                                    </div>

                                    {/*EXTRA BUTTON*/}
                                    {extraButtons && (
                                        <div className="flex flex-grow">
                                            <div className="flex w-full items-center justify-end gap-x-2">
                                                {extraButtons.map(
                                                    (buttons, _) => (
                                                        <div key={`${title}_extrabuttons_${_}`}>
                                                            {buttons}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/*TABLE*/}
                            <table className={` ${data && data.length > 0 ? 'min-w-full divide-y divide-gray-200' : 'flex flex-col items-center justify-center'} `}>

                                {/*HEADER TABLE*/}
                                <thead className="bg-gray-50 ">
                                <tr>
                                    {headers.map($ => (
                                        <th scope="col" className="px-6 py-2 text-left" key={$}>
                                            <button onClick={()=> { if(onClickTh) onClickTh($)}} className={`${onClickTh !== undefined && $ !== 'options' ? 'cursor-pointer': 'cursor-default'} flex items-center gap-x-2`}>
                                                    <span className={`text-xs font-semibold uppercase tracking-wide text-gray-800 ${filterByTh?.value === $ ? 'font-bold': ''}`} >
                                                        {$}
                                                    </span>
                                                {filterByTh && $ !== 'options' && <div>image</div>}
                                            </button>
                                        </th>
                                    ))}
                                </tr>
                                </thead>

                                {/*BODY*/}
                                <tbody className={`divide-y divide-gray-200 ${data.length === 0 ? 'flex min-h-[650px] flex-col items-center justify-center' : ''}`}>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={headers.length} className='flex justify-center py-10'>
                                            <Spinner fullScreen={false} />
                                        </td>
                                    </tr>
                                ) : data.length > 0 ? (
                                    data.map((item, i) => (
                                        <tr className='p-4 hover:bg-gray-100 transition duration-200 ease-in-out' key={i}>
                                            {headers.map((key, ii) => (
                                                <td key={`cell_${i}_${ii}`} className='py-0.5 pl-6 text-gray-500'>
                                                    {Array.isArray(item[key])
                                                        ? <div className='flex'>{item[key]}</div>
                                                        : item[key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={headers.length} className='flex items-center justify-center py-10'>
                                            <p className='text-gray-500'>No data available :v</p>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenericTable
