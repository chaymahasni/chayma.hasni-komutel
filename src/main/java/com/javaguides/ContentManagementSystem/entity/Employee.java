package com.javaguides.ContentManagementSystem.entity;




import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id ;
    @Column (name = "nom" , nullable = false)
    private String nom ;
    @Column (name = "adress")
    private String address ;
    @Column (name = "ville")
    private String ville ;
    @Column (name = "pays")
    private String pays ;
    @Column (name = "telephone")
    private int telephone ;
    @Column (name = "debut_contact")
    private Date debut_contact ;

    public Employee() {
    }

    public Employee(long id, String nom, String address, String ville, String pays, int telephone, Date debut_contact) {
        this.id = id;
        this.nom = nom;
        this.address = address;
        this.ville = ville;
        this.pays = pays;
        this.telephone = telephone;
        this.debut_contact = debut_contact;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public int getTelephone() {
        return telephone;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }

    public Date getDebut_contact() {
        return debut_contact;
    }

    public void setDebut_contact(Date debut_contact) {
        this.debut_contact = debut_contact;
    }
}
