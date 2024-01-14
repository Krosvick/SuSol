"use client"
import { useState, useEffect } from "react"
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export default function About(){
    const router = useRouter()
    const [count, setCount] = useState(0)
    const [intervalTime, setIntervalTime] = useState(1000) // Start with 1 second interval

    let fibonacciNumbers = [0, 1]; // Store the first two Fibonacci numbers

    const fibonacci = (n: number): number|undefined => {
        if (n < fibonacciNumbers.length) {
            // If the Fibonacci number has already been calculated, return it
            fibonacciNumbers[n] = fibonacciNumbers[n] || 0;
            return fibonacciNumbers[n];
        } else {
            // Otherwise, calculate it and store it
            let a = n >= 2 ? fibonacciNumbers[n - 2] : 0;
            let b = n >= 1 ? fibonacciNumbers[n - 1] : 1;
            fibonacciNumbers[n] = a + b;
            return a + b;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, intervalTime);

        // Decrease intervalTime with each Fibonacci step
        setIntervalTime(intervalTime => Math.max(10, intervalTime - fibonacci(count)))
        console.log(intervalTime);

        return () => clearInterval(interval); // This is to clear the interval
    }, [count]);

    const getAs = () => {
        let fib = 0;
        let i = 0;
        while (fib <= count) {
            fib = fibonacci(i);
            i++;
        }
        return Array.from({length: i}, (_, index) => "A".repeat(fibonacci(index + 1)));
    }

    const renderAs = () => {
        const as = getAs();
        return as.map((a, index) => {
            const fontSize = 100 / Math.log(index + 2); // Add 2 to avoid division by zero and negative infinity
            return <h1 key={index} style={{fontSize: `${fontSize}%`}}>{a}</h1>;
        });
    }

    return (
        <div className="min-h-screen min-w-screen bg-black text-white">
            <h1>about {count}</h1>
            <Button color="success" radius="none" className="rounded-sm text-white" variant="shadow" onClick={() => setCount(count + 1)}>increment</Button>
            {renderAs()}
        </div>
    )
}