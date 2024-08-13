"use client";

import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ModalFormProps {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

export const ModalForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalFormProps>();

  const onSubmit = async (data: ModalFormProps) => {
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert("Mensagem enviada com sucesso!");
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#ffc746]" variant="outline">
          Entrar em contato
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contato</DialogTitle>
          <DialogDescription>
            Entrarei em contato assim que possível
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Digite seu nome"
                  {...register("nome", { required: true })}
                />
                {errors.nome && <span>Nome é obrigatório</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email é obrigatório</span>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="Digite seu número com DDD"
                {...register("telefone")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                placeholder="Digite sua mensagem"
                className="min-h-[150px]"
                {...register("mensagem", { required: true })}
              />
              {errors.mensagem && <span>Mensagem é obrigatória</span>}
            </div>
          </div>
          <DialogFooter>
            <Button className="bg-[#ffc746] text-[#2c2c2c]" type="submit">
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
