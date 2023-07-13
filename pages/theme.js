export default function themeSetting(mode){
    return {
        mode:mode,
        ...(mode === 'd'
        ?{
            ho:'dark',
            // bg:{
            //     d:,
            //     m:,
            //     l:,
            // },
            pr:{
                d:'#6200ee',
                m:'#03dac6',
                l:'#018786',
            },

        }:{
            ho:'light',
            // bg:{
            //     d:,
            //     m:,
            //     l:,
            // },
            // pr:{
            //     d:,
            //     m:,
            //     l:,
            // },

        })
    }
}