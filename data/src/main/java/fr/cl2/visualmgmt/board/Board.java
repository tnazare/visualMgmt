package fr.cl2.visualmgmt.board;

import com.google.common.base.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@SuppressWarnings("serial")
@Entity
public class Board implements Serializable,Comparable<Board>{

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String description;

    private List<Board> subBoards;

    private List<Column> columns;


    public Board(String title,String description){
        this.title = title;
        this.description = description;
        this.subBoards = new ArrayList<>();
        this.columns = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Board> getSubBoards() {
        return subBoards;
    }

    public boolean addSubboard(Board subboard){
        return this.subBoards.add(subboard);
    }

    public boolean addSubABooleanAtASpecifiedPlace(int index, Board subboard){
         this.subBoards.add(index, subboard);
    }

    public List<Column> getColumns() {
        return columns;
    }

    public boolean addColumn(Column column){
        return this.columns.add(column);
    }

    public void addColumnAtASpecifiedPlace(int index, Column column){
        this.columns.add(index, column);
    }

    @Override
    /**
     * Default compare is only based on id comparison
     */
    public int compareTo(Board o) {
        return this.id.compareTo(o.getId());
    }

    @Override
    public String toString() {
        return Objects.toStringHelper(this)
                .add("id", id)
                .add("title", title)
                .add("description", description)
                .add("subBoards", subBoards)
                .add("columns", columns)
                .toString();
    }
}
