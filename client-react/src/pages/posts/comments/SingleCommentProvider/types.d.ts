interface SingleCommentProps {
  children: React.ReactNode;
  id: string;
}

interface SingleCommentContextProps {
    scq: QueryResult<SingleCommentsQuery, Exact<{
        cid: Scalars["ID"]["input"];
    }>>
}