/**
 * Autogenerated by Thrift Compiler (0.9.1)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.funshion.test;

import org.apache.thrift.scheme.IScheme;
import org.apache.thrift.scheme.SchemeFactory;
import org.apache.thrift.scheme.StandardScheme;

import org.apache.thrift.scheme.TupleScheme;
import org.apache.thrift.protocol.TTupleProtocol;
import org.apache.thrift.protocol.TProtocolException;
import org.apache.thrift.EncodingUtils;
import org.apache.thrift.TException;
import org.apache.thrift.async.AsyncMethodCallback;
import org.apache.thrift.server.AbstractNonblockingServer.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.EnumMap;
import java.util.Set;
import java.util.HashSet;
import java.util.EnumSet;
import java.util.Collections;
import java.util.BitSet;
import java.nio.ByteBuffer;
import java.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CookieMore implements org.apache.thrift.TBase<CookieMore, CookieMore._Fields>, java.io.Serializable, Cloneable, Comparable<CookieMore> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("CookieMore");

  private static final org.apache.thrift.protocol.TField MICK_FIELD_DESC = new org.apache.thrift.protocol.TField("mick", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField DOMAIN_FIELD_DESC = new org.apache.thrift.protocol.TField("domain", org.apache.thrift.protocol.TType.STRING, (short)2);
  private static final org.apache.thrift.protocol.TField COOKIE_LIST_FIELD_DESC = new org.apache.thrift.protocol.TField("cookieList", org.apache.thrift.protocol.TType.LIST, (short)3);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new CookieMoreStandardSchemeFactory());
    schemes.put(TupleScheme.class, new CookieMoreTupleSchemeFactory());
  }

  public String mick; // required
  public String domain; // required
  public List<CookieDetail> cookieList; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    MICK((short)1, "mick"),
    DOMAIN((short)2, "domain"),
    COOKIE_LIST((short)3, "cookieList");

    private static final Map<String, _Fields> byName = new HashMap<String, _Fields>();

    static {
      for (_Fields field : EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // MICK
          return MICK;
        case 2: // DOMAIN
          return DOMAIN;
        case 3: // COOKIE_LIST
          return COOKIE_LIST;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    public static _Fields findByName(String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final String _fieldName;

    _Fields(short thriftId, String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    public short getThriftFieldId() {
      return _thriftId;
    }

    public String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.MICK, new org.apache.thrift.meta_data.FieldMetaData("mick", org.apache.thrift.TFieldRequirementType.REQUIRED, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.DOMAIN, new org.apache.thrift.meta_data.FieldMetaData("domain", org.apache.thrift.TFieldRequirementType.REQUIRED, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.COOKIE_LIST, new org.apache.thrift.meta_data.FieldMetaData("cookieList", org.apache.thrift.TFieldRequirementType.REQUIRED, 
        new org.apache.thrift.meta_data.ListMetaData(org.apache.thrift.protocol.TType.LIST, 
            new org.apache.thrift.meta_data.StructMetaData(org.apache.thrift.protocol.TType.STRUCT, CookieDetail.class))));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(CookieMore.class, metaDataMap);
  }

  public CookieMore() {
  }

  public CookieMore(
    String mick,
    String domain,
    List<CookieDetail> cookieList)
  {
    this();
    this.mick = mick;
    this.domain = domain;
    this.cookieList = cookieList;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public CookieMore(CookieMore other) {
    if (other.isSetMick()) {
      this.mick = other.mick;
    }
    if (other.isSetDomain()) {
      this.domain = other.domain;
    }
    if (other.isSetCookieList()) {
      List<CookieDetail> __this__cookieList = new ArrayList<CookieDetail>(other.cookieList.size());
      for (CookieDetail other_element : other.cookieList) {
        __this__cookieList.add(new CookieDetail(other_element));
      }
      this.cookieList = __this__cookieList;
    }
  }

  public CookieMore deepCopy() {
    return new CookieMore(this);
  }

  @Override
  public void clear() {
    this.mick = null;
    this.domain = null;
    this.cookieList = null;
  }

  public String getMick() {
    return this.mick;
  }

  public CookieMore setMick(String mick) {
    this.mick = mick;
    return this;
  }

  public void unsetMick() {
    this.mick = null;
  }

  /** Returns true if field mick is set (has been assigned a value) and false otherwise */
  public boolean isSetMick() {
    return this.mick != null;
  }

  public void setMickIsSet(boolean value) {
    if (!value) {
      this.mick = null;
    }
  }

  public String getDomain() {
    return this.domain;
  }

  public CookieMore setDomain(String domain) {
    this.domain = domain;
    return this;
  }

  public void unsetDomain() {
    this.domain = null;
  }

  /** Returns true if field domain is set (has been assigned a value) and false otherwise */
  public boolean isSetDomain() {
    return this.domain != null;
  }

  public void setDomainIsSet(boolean value) {
    if (!value) {
      this.domain = null;
    }
  }

  public int getCookieListSize() {
    return (this.cookieList == null) ? 0 : this.cookieList.size();
  }

  public java.util.Iterator<CookieDetail> getCookieListIterator() {
    return (this.cookieList == null) ? null : this.cookieList.iterator();
  }

  public void addToCookieList(CookieDetail elem) {
    if (this.cookieList == null) {
      this.cookieList = new ArrayList<CookieDetail>();
    }
    this.cookieList.add(elem);
  }

  public List<CookieDetail> getCookieList() {
    return this.cookieList;
  }

  public CookieMore setCookieList(List<CookieDetail> cookieList) {
    this.cookieList = cookieList;
    return this;
  }

  public void unsetCookieList() {
    this.cookieList = null;
  }

  /** Returns true if field cookieList is set (has been assigned a value) and false otherwise */
  public boolean isSetCookieList() {
    return this.cookieList != null;
  }

  public void setCookieListIsSet(boolean value) {
    if (!value) {
      this.cookieList = null;
    }
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case MICK:
      if (value == null) {
        unsetMick();
      } else {
        setMick((String)value);
      }
      break;

    case DOMAIN:
      if (value == null) {
        unsetDomain();
      } else {
        setDomain((String)value);
      }
      break;

    case COOKIE_LIST:
      if (value == null) {
        unsetCookieList();
      } else {
        setCookieList((List<CookieDetail>)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case MICK:
      return getMick();

    case DOMAIN:
      return getDomain();

    case COOKIE_LIST:
      return getCookieList();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case MICK:
      return isSetMick();
    case DOMAIN:
      return isSetDomain();
    case COOKIE_LIST:
      return isSetCookieList();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof CookieMore)
      return this.equals((CookieMore)that);
    return false;
  }

  public boolean equals(CookieMore that) {
    if (that == null)
      return false;

    boolean this_present_mick = true && this.isSetMick();
    boolean that_present_mick = true && that.isSetMick();
    if (this_present_mick || that_present_mick) {
      if (!(this_present_mick && that_present_mick))
        return false;
      if (!this.mick.equals(that.mick))
        return false;
    }

    boolean this_present_domain = true && this.isSetDomain();
    boolean that_present_domain = true && that.isSetDomain();
    if (this_present_domain || that_present_domain) {
      if (!(this_present_domain && that_present_domain))
        return false;
      if (!this.domain.equals(that.domain))
        return false;
    }

    boolean this_present_cookieList = true && this.isSetCookieList();
    boolean that_present_cookieList = true && that.isSetCookieList();
    if (this_present_cookieList || that_present_cookieList) {
      if (!(this_present_cookieList && that_present_cookieList))
        return false;
      if (!this.cookieList.equals(that.cookieList))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    return 0;
  }

  @Override
  public int compareTo(CookieMore other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetMick()).compareTo(other.isSetMick());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetMick()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.mick, other.mick);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetDomain()).compareTo(other.isSetDomain());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetDomain()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.domain, other.domain);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetCookieList()).compareTo(other.isSetCookieList());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetCookieList()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.cookieList, other.cookieList);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    schemes.get(iprot.getScheme()).getScheme().read(iprot, this);
  }

  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    schemes.get(oprot.getScheme()).getScheme().write(oprot, this);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder("CookieMore(");
    boolean first = true;

    sb.append("mick:");
    if (this.mick == null) {
      sb.append("null");
    } else {
      sb.append(this.mick);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("domain:");
    if (this.domain == null) {
      sb.append("null");
    } else {
      sb.append(this.domain);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("cookieList:");
    if (this.cookieList == null) {
      sb.append("null");
    } else {
      sb.append(this.cookieList);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    if (mick == null) {
      throw new org.apache.thrift.protocol.TProtocolException("Required field 'mick' was not present! Struct: " + toString());
    }
    if (domain == null) {
      throw new org.apache.thrift.protocol.TProtocolException("Required field 'domain' was not present! Struct: " + toString());
    }
    if (cookieList == null) {
      throw new org.apache.thrift.protocol.TProtocolException("Required field 'cookieList' was not present! Struct: " + toString());
    }
    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, ClassNotFoundException {
    try {
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class CookieMoreStandardSchemeFactory implements SchemeFactory {
    public CookieMoreStandardScheme getScheme() {
      return new CookieMoreStandardScheme();
    }
  }

  private static class CookieMoreStandardScheme extends StandardScheme<CookieMore> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, CookieMore struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // MICK
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.mick = iprot.readString();
              struct.setMickIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // DOMAIN
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.domain = iprot.readString();
              struct.setDomainIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // COOKIE_LIST
            if (schemeField.type == org.apache.thrift.protocol.TType.LIST) {
              {
                org.apache.thrift.protocol.TList _list0 = iprot.readListBegin();
                struct.cookieList = new ArrayList<CookieDetail>(_list0.size);
                for (int _i1 = 0; _i1 < _list0.size; ++_i1)
                {
                  CookieDetail _elem2;
                  _elem2 = new CookieDetail();
                  _elem2.read(iprot);
                  struct.cookieList.add(_elem2);
                }
                iprot.readListEnd();
              }
              struct.setCookieListIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    public void write(org.apache.thrift.protocol.TProtocol oprot, CookieMore struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.mick != null) {
        oprot.writeFieldBegin(MICK_FIELD_DESC);
        oprot.writeString(struct.mick);
        oprot.writeFieldEnd();
      }
      if (struct.domain != null) {
        oprot.writeFieldBegin(DOMAIN_FIELD_DESC);
        oprot.writeString(struct.domain);
        oprot.writeFieldEnd();
      }
      if (struct.cookieList != null) {
        oprot.writeFieldBegin(COOKIE_LIST_FIELD_DESC);
        {
          oprot.writeListBegin(new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, struct.cookieList.size()));
          for (CookieDetail _iter3 : struct.cookieList)
          {
            _iter3.write(oprot);
          }
          oprot.writeListEnd();
        }
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class CookieMoreTupleSchemeFactory implements SchemeFactory {
    public CookieMoreTupleScheme getScheme() {
      return new CookieMoreTupleScheme();
    }
  }

  private static class CookieMoreTupleScheme extends TupleScheme<CookieMore> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, CookieMore struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      oprot.writeString(struct.mick);
      oprot.writeString(struct.domain);
      {
        oprot.writeI32(struct.cookieList.size());
        for (CookieDetail _iter4 : struct.cookieList)
        {
          _iter4.write(oprot);
        }
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, CookieMore struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      struct.mick = iprot.readString();
      struct.setMickIsSet(true);
      struct.domain = iprot.readString();
      struct.setDomainIsSet(true);
      {
        org.apache.thrift.protocol.TList _list5 = new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, iprot.readI32());
        struct.cookieList = new ArrayList<CookieDetail>(_list5.size);
        for (int _i6 = 0; _i6 < _list5.size; ++_i6)
        {
          CookieDetail _elem7;
          _elem7 = new CookieDetail();
          _elem7.read(iprot);
          struct.cookieList.add(_elem7);
        }
      }
      struct.setCookieListIsSet(true);
    }
  }

}

