import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConnection';

interface StatsCounterProps {
  className?: string;
}

export function StatsCounter({ className }: StatsCounterProps) {
  const [posts, setPosts] = useState(0);
  const [comments, setComments] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const commentRef = collection(db, "comments");
        const postRef = collection(db, "tarefas");

        const [commentSnapshot, postSnapshot] = await Promise.all([
          getDocs(commentRef),
          getDocs(postRef)
        ]);

        setPosts(postSnapshot.size);
        setComments(commentSnapshot.size);
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        // Manter valores padrão em caso de erro
        setPosts(0);
        setComments(0);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className={className}>
        <section className="box">
          <span>Carregando...</span>
        </section>
        <section className="box">
          <span>Carregando...</span>
        </section>
      </div>
    );
  }

  return (
    <div className={className}>
      <section className="box">
        <span>+{posts} posts</span>
      </section>
      <section className="box">
        <span>+{comments} comentários</span>
      </section>
    </div>
  );
}
