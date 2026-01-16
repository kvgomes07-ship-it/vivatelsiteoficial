"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    X,
    Send,
    MessageSquare,
    Bot,
    User,
    MoreHorizontal,
    Paperclip,
    Smile,
    Headphones
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Message = {
    id: string
    text: string
    sender: 'user' | 'ai' | 'human'
    timestamp: Date
}

interface ChatWidgetProps {
    isOpen: boolean
    onClose: () => void
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Olá! Eu sou a Viva, assistente virtual da VIVATEL. Como posso ajudar você hoje?",
            sender: 'ai',
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [mode, setMode] = useState<'ai' | 'human'>('ai')
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, newMessage])
        setInputValue("")
        setIsTyping(true)

        // Mock response
        setTimeout(() => {
            const responseText = mode === 'ai'
                ? "Entendi. Para resolver essa questão específica, posso sugerir alguns artigos da nossa base de conhecimento ou transferir para um especialista humano. O que prefere?"
                : "Um de nossos especialistas está analisando sua solicitação e responderá em instantes."

            const responseMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: mode,
                timestamp: new Date()
            }
            setMessages(prev => [...prev, responseMessage])
            setIsTyping(false)
        }, 2000)
    }

    const switchToHuman = () => {
        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: "Transferindo para um atendente humano...",
            sender: 'ai',
            timestamp: new Date()
        }])

        setTimeout(() => {
            setMode('human')
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: "Olá! Meu nome é Carlos. Estou lendo o histórico da sua conversa. Como posso ajudar?",
                sender: 'human',
                timestamp: new Date()
            }])
        }, 1500)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-4 right-4 z-50 w-[380px] h-[600px] max-h-[80vh] flex flex-col bg-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center border",
                                mode === 'ai' ? "bg-cyan-500/10 border-cyan-500/20" : "bg-blue-500/10 border-blue-500/20"
                            )}>
                                {mode === 'ai' ? (
                                    <Bot className="h-6 w-6 text-cyan-400" />
                                ) : (
                                    <Headphones className="h-6 w-6 text-blue-400" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-white">
                                    {mode === 'ai' ? "VIVATEL Assistant" : "Suporte Técnico"}
                                </h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs text-gray-400">
                                        {mode === 'ai' ? "IA Online" : "Carlos Online"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            {mode === 'ai' && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-gray-400 hover:text-white"
                                    onClick={switchToHuman}
                                    title="Falar com Humano"
                                >
                                    <Headphones className="h-4 w-4" />
                                </Button>
                            )}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:text-white"
                                onClick={onClose}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex w-full",
                                    msg.sender === 'user' ? "justify-end" : "justify-start"
                                )}
                            >
                                <div className={cn(
                                    "max-w-[80%] p-3 rounded-2xl text-sm",
                                    msg.sender === 'user'
                                        ? "bg-cyan-600 text-white rounded-br-none"
                                        : "bg-gray-800 text-gray-200 rounded-bl-none"
                                )}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-none flex gap-1">
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-800 bg-gray-900/30">
                        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 focus-within:border-cyan-500/50 transition-colors">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Digite sua mensagem..."
                                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-gray-500"
                            />
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-cyan-400">
                                    <Paperclip className="h-4 w-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    className="h-8 w-8 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white"
                                    onClick={handleSendMessage}
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-gray-500">
                                Protegido por criptografia VIVATEL Security
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
