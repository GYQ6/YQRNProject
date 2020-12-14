

import { LOGIN_URL } from '../Home/HomeHelper'
import YQRequest from '../../YQRequestManager/YQRequest'

class YQHomeService {
    static fetchLoginNetwork = () => {
        return (
            YQRequest.post(
                url = LOGIN_URL,
                params = {
                    phone: '1377607226',
                    c: '111'
                },
                options = {
                    headers: {
                    },
                    loading: false
                }
            )
        )
    }
}

export default YQHomeService

