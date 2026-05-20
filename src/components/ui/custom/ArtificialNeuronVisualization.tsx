import React, {useEffect, useMemo} from 'react';
import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Position,
} from 'reactflow';
import type { Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import type {ArtificialNeuronVisualizationProps} from "@/types/props/ArtificialNeuronVisualizationProps.ts";
import {Brain} from "lucide-react";

const ArtificialNeuronVisualization: React.FC<ArtificialNeuronVisualizationProps> = (
    {
        visualizationInputWeightHookProps,
        visualizationBiasHookProps,
        visualizationActivationFunctionHookProps,
        neuronTrainerStudioRef,
    }: ArtificialNeuronVisualizationProps) => {

    const [ nodes, setNodes, onNodesChange ] = useNodesState([])
    const [ edges, setEdges, onEdgeChange ] = useEdgesState([])

    const nodeTypes = useMemo(() => (
        {}
    ), [])
    const edgeTypes = useMemo(() => (
        {}
    ), [])

    useEffect(() => {
        const newNodes: Node[] = []
        const newEdges: Edge[] = []

        const neuronSize: number = 120
        const smallNodeSize: number = 60

        const neuronX: number = 300
        const neuronY: number = 250
        const neuronCenterY: number = neuronY + neuronSize / 2
        const inputSpacing: number = 80
        const totalInputHeight: number = (visualizationInputWeightHookProps.visualizationInputWeight.length - 1) * inputSpacing;
        const inputStartY: number = neuronCenterY - totalInputHeight / 2 - smallNodeSize / 2
        const outputX: number = 550
        const outputY: number = neuronCenterY - smallNodeSize / 2

        visualizationInputWeightHookProps.visualizationInputWeight.map((inputWeight, index) => {
            const inputY: number = inputStartY + index * inputSpacing

            newNodes.push( // input node
                {
                    id: `input-${index}`,
                    data: {
                        label: (
                            <div className="flex flex-col items-center">
                                <span className="text-[10px]">Input {index + 1}</span>
                                <span className="text-[8px]">{inputWeight.input?.toFixed(2) || '0.00'}</span>
                            </div>
                        ),
                    },
                    position: {
                        x: 50,
                        y: inputY
                    },
                    style: {
                        background: '#155DFCFF',
                        color: '#fafafa',
                        border: '1px solid #ffffff1a',
                        borderRadius: '50%',
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'grabbing',
                        fontSize: '10px',
                        fontWeight: 'bold',
                    },
                    draggable: true,
                    sourcePosition: Position.Right,
                    targetPosition: Position.Right,
                }
            )

            newEdges.push( // edge: input to neuron
                {
                    id: `edge-input-${index}`,
                    source: `input-${index}`,
                    target: 'neuron',
                    label: `w${index + 1} = ${inputWeight.weight?.toFixed(2) || '0.00'}`,
                    labelStyle: {
                        fill: '#fafafa',
                        fontWeight: 'normal',
                        fontSize: '8px',
                        background: '#262626',
                        padding: '2px 4px',
                        borderRadius: '50%'
                    },
                    labelBgStyle: {
                        fill: '#262626',
                        stroke: '#ffffff1a',
                        strokeWidth: 1,
                    },
                    style: {
                        stroke: '#737373',
                        strokeWidth: 2
                    },
                    type: 'straight',
                }
            )
        })

        newNodes.push( // neuron node
            {
                id: 'neuron',
                data: {
                    label: (
                        <div className="flex flex-col items-center justify-center h-full">
                            <span className="text-[12px]">Neuron</span>
                            <span className="text-[8px]">b = {visualizationBiasHookProps.visualizationBias?.toFixed(2) || '0.00'}</span>
                        </div>
                    ),
                },
                position: {
                    x: neuronX,
                    y: neuronY
                },
                style: {
                    background: '#E7000BFF',
                    color: '#fafafa',
                    border: '1px solid #ffffff1a',
                    borderRadius: '50%',
                    width: 120,
                    height: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'grabbing',
                    fontSize: '14px',
                    fontWeight: 'bold',
                },
                draggable: true,
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
            }
        )

        newNodes.push( // output node
            {
                id: 'output',
                data: {
                    label: (
                        <div className="flex flex-col items-center">
                            <span className="text-[10px]">Output</span>
                            {/*<span className="text-[8px]">{visualizationActivationFunctionHookProps.visualizationActivationFunction?.toFixed(3) || '0.000'}</span>*/}
                        </div>
                    ),
                },
                position: {
                    x: outputX,
                    y: outputY
                },
                style: {
                    background: '#bfcfe6',
                    color: '#171717',
                    border: '1px solid #ffffff1a',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'grabbing',
                    fontSize: '10px',
                    fontWeight: 'bold',
                },
                draggable: true,
                sourcePosition: Position.Left,
                targetPosition: Position.Left,
            }
        )

        newEdges.push( // edge: neuron to output
            {
                id: 'edge-output',
                source: 'neuron',
                target: 'output',
                type: 'straight',
                style: {
                    stroke: '#737373',
                    strokeWidth: 2
                }
            }
        )

        setNodes(newNodes)
        setEdges(newEdges)
    }, [
        visualizationInputWeightHookProps.visualizationInputWeight,
        visualizationBiasHookProps.visualizationBias,
        visualizationActivationFunctionHookProps.visualizationActivationFunction,
    ])

    return (
        <Card ref={neuronTrainerStudioRef}>
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <Brain size="18" />
                    Neuron Architecture Visualization
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-row items-center">	Real-time visual representation of your artificial neuron showing inputs, weights, bias, and activation function in action.</div>
                </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    nodesDraggable={true}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgeChange}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitViewOptions={{
                        padding: 0.2,
                        includeHiddenNodes: false,
                        minZoom: 0.5,
                        maxZoom: 1
                    }}
                    attributionPosition={"bottom-right"}
                >
                    <Background color="#737373" gap={16} />
                    <Controls
                        showInteractive={false}
                        style={{
                            background: 'oklch(0.546 0.245 262.881)',
                            border: '1px solid #ffffff1a',
                            borderRadius: '16px',
                        }}
                    />
                </ReactFlow>
            </CardContent>
        </Card>
    )
}

export default ArtificialNeuronVisualization