import React, { FC } from 'react'
import { IUserPicker } from '../../interfaces/IUserPicker'

const UserPicker: FC<IUserPicker> = () => {
    return (
        <select>
            <option>Users</option>
        </select>
    )
}
export default UserPicker;