import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

interface Props {
    value: string;
    onClick: Function;
    type: string;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({ onClick, value, type, disabled }) => {
    return (
        <div>
            <PrimaryButton disabled={disabled} type={type} onClick={() => onClick()}>
                {value}
            </PrimaryButton>
        </div>
    );
};

export { Button };
