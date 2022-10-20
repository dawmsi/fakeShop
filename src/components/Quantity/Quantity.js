import { Button, TextField } from '@mui/material'
import React from 'react'

export const Quantity = ({ onDecrement, onIncrement, count, minCount = 1 }) => {
    return (
        <div className="product-quantity">
            <Button
                variant="contained"
                onClick={onDecrement}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button
                variant="contained"
                onClick={onIncrement}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
