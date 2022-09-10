import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div>{value1}</div>
                <SuperRange
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <div>{value1}</div>
                {/*<SuperDoubleRange*/}
                {/*    // onChange={[setValue1, setValue2]}*/}
                {/*    // value={[value1, value2]}*/}
                {/*    setValue1={setValue1}*/}
                {/*    setValue2={setValue2}*/}
                {/*    min={value1}*/}
                {/*    max={value2}*/}
                {/*    // сделать так чтоб value1 и value2 изменялось*/}
                {/*/>*/}
                <div>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
