import React from 'react'

type LabelProps = {
  value: number
}

export const Label: React.FC<LabelProps> = ({value}) => {
  return (
    <div>
      <label>{value}</label>
    </div>
  )
}