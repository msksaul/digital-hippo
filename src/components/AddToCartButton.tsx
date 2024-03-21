'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '../hooks/use-cart'
import { Product } from '../payload-types'

const AddToCartButton = ({ product }: {product: Product}) => {

  const { addItem } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000);
  
    return () => {
      clearTimeout(timeout)
    }
  }, [isSuccess])
  
  return (
    <Button
      size={'lg'} 
      className='w-full'
      disabled={isSuccess}
      onClick={
        () => {
          setIsSuccess(true)
          addItem(product)
        }
      }
    >
      {isSuccess ? 'Added!' : 'Add to Cart'}
    </Button>
  )
}

export default AddToCartButton